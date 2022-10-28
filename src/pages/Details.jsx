import { useEffect, useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaHeartbeat } from 'react-icons/fa';
import { Circles } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';

function Details({ isDarkMode }) {
    const [detail, setDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    const getData = async (id) => {
        const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || []
        const check = savedRecipes.find(item => item.id === parseInt(id))

        if (check !== undefined) {
            setDetails(check)
            setIsLoading(false)
        } else {

            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
                const data = await res.json()
                savedRecipes.push(data)
                localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
                setDetails(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

    }

    useEffect(() => {
        getData(params.id)
    }, [params.id])

    return (
        <div className={isDarkMode ? "details dark" : "details"}>
            {isLoading
                ? <Circles
                    height="40"
                    width="40"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass="loading"
                    visible={true}
                />
                : <>
                    <h2 className='details--title'>{detail.title}</h2>
                    <div className="details--container">
                        <div className="details--left_side">
                            <div className="details--image">
                                <img src={detail.image} alt={detail.title} />
                            </div>
                        </div>
                        <div className="details--right__side">
                            <span className='details--like'><BiLike /> {detail.aggregateLikes}</span>
                            <span className='details--score'><FaHeartbeat className={detail.healthScore > 70 ? "green" : detail.healthScore > 30 ? "blue" : "red"} /> {detail.healthScore}</span>
                            {detail.cuisines.length !== 0 && <span >Cuisines: {detail.cuisines.map(type => (<Link key={type} to={'/cuisines/' + type}><span className="chip cuisines">{type}</span></Link>))}
                            </span>}
                            {detail.occasions.length !== 0 && <span>Occasions: {detail.occasions.map(type => (<span key={type} className="chip">{type}</span>))}
                            </span>}
                            {detail.diets.length !== 0 && <span>Diets: {detail.diets.map(type => (<span key={type} className="chip">{type}</span>))}
                            </span>}
                        </div>
                    </div>
                    <div >
                        <div className="details--more">
                            <h3>Summary</h3>
                            <p dangerouslySetInnerHTML={{ __html: detail.summary }} ></p>
                        </div>
                        <div className="details--more">
                            <h3>Instructions</h3>
                            <p dangerouslySetInnerHTML={{ __html: detail.instructions }} ></p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Details