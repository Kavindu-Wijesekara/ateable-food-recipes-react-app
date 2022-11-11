import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import { Link, useParams } from "react-router-dom";
import { Heading, SimpleGrid, Center, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import { getCuisineRecipes } from "../api";

export default function Cuisines() {
    const [cuisineItems, setCuisineItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    // const getCuisines = async (cuisine) => {

    //     const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=20&cuisine=${cuisine}&apiKey=${process.env.REACT_APP_API_KEY}`)
    //     const json = await data.json()
    //     setCuisineItems(json.results)
    //     setIsLoading(false)
    // }

    useEffect(() => {
        getCuisineRecipes(params.cuisine)
            .then((recipes) => {
                setCuisineItems(recipes);
                setIsLoading(false)
            })
    }, [params.cuisine])

    const cardElement = cuisineItems?.map(item => {
        return (
            <Link key={item.id} to={'/recipe/' + item.id} ><Card item={item} /></Link>
        )
    })

    return (
        <>
            <Heading mb='2rem' size='md' >Search results for "{params.cuisine}"</Heading>
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