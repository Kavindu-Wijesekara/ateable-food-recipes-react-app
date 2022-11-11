import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { Heading, SimpleGrid, Center, Text } from '@chakra-ui/react';
import Card from '../components/Card';
import { getSearchResults } from '../api';

function Search() {
    const [searchedItems, setSearchedItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()


    // const getSearched = async (query) => {
    //     const searchList = localStorage.getItem('searchList')

    //     if (searchList) {
    //         setSearchedItems(JSON.parse(searchList))
    //         setIsLoading(false)
    //     } else {
    //         const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&query=${query}&apiKey=${process.env.REACT_APP_API_KEY}`)
    //         const json = await data.json()
    //         localStorage.setItem('searchList', JSON.stringify(json.results))
    //         setSearchedItems(json.results)
    //         setIsLoading(false)
    //     }

    // }

    useEffect(() => {
        // getSearched(params.search)
        getSearchResults(params.search)
            .then((data) => {
                setSearchedItems(data)
                setIsLoading(false)
            })
    }, [params.search])

    const cardElement = searchedItems?.map(item => {
        return (
            <Link key={item.id} to={'/recipe/' + item.id} ><Card item={item} /></Link>
        )
    })

    return (
        <>
            <Heading mb='2rem' size='md' >Search results for "{params.search}"</Heading>
            {isLoading
                ? <Center>
                    <Circles
                        height="40"
                        width="40"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass="loading"
                        visible={true}
                    />
                </Center>
                : <SimpleGrid minChildWidth='15rem' spacing='40px'>
                    {cardElement.length > 0 ? cardElement : <Center><Text> No recipes found. </Text></Center>}
                </SimpleGrid>}
        </>
    )
}

export default Search