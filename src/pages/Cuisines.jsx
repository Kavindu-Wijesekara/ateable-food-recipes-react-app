import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

export default function Cuisines({ isDarkMode }) {
    const [cuisineItems, setCuisineItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    const getCuisines = async (cuisine) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&cuisine=${cuisine}&apiKey=${process.env.REACT_APP_API_KEY}`)
        const json = await data.json()
        setCuisineItems(json.results)
        setIsLoading(false)
    }

    useEffect(() => {
        getCuisines(params.cuisine)
    }, [params.cuisine])

    const cardElement = cuisineItems?.map(item => {
        return (
            <Link key={item.id} to={'/recipe/' + item.id} ><Card item={item} /></Link>
        )
    })

    return (
        <div className={isDarkMode ? "home dark" : "home"}>
            <h2 className="home--heading" >Search results for "{params.cuisine}"</h2>
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
                : <div className="grid" >
                    {cardElement}
                </div>}
        </div>
    )
}