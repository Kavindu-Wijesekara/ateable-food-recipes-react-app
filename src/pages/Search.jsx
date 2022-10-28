import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';

function Search({ isDarkMode }) {
    const [searchedItems, setSearchedItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()


    const getSearched = async (query) => {
        // const searchList = localStorage.getItem('searchList')

        // if (searchList) {
        //     setSearchedItems(JSON.parse(searchList))
        //     setIsLoading(false)
        // } else {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`)
        const json = await data.json()
        // localStorage.setItem('searchList', JSON.stringify(json.results))
        setSearchedItems(json.results)
        setIsLoading(false)
        // }

    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])

    const cardElement = searchedItems?.map(item => {
        return (
            <Link key={item.id} to={'/recipe/' + item.id} ><Card item={item} /></Link>
        )
    })

    return (
        <div className={isDarkMode ? "home dark" : "home"}>
            <h2 className="home--heading" >Search results for "{params.search}"</h2>
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

export default Search