import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/sea-green';
import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import { Box, SimpleGrid, Heading, Center } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Data from "../cuisines";
import { getPopularRecipes } from "../api";

const Home = () => {
  const [popular, setPopular] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPopularRecipes()
      .then((recipes) => {
        setPopular(recipes)
        setIsLoading(false)
      })
  }, [])

  // const getPopular = async () => {
  //   const checkPopular = localStorage.getItem('popularR')

  //   if (checkPopular) {
  //     setPopular(JSON.parse(checkPopular))
  //     setIsLoading(false)
  //   } else {
  //     const api = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${process.env.REACT_APP_API_KEY}`)
  //     const data = await api.json()
  //     localStorage.setItem("popularR", JSON.stringify(data.recipes))
  //     setIsLoading(false)
  //     setPopular(data.recipes)
  //   }
  // }

  const cardElement = popular.map(item => (
    <Link key={item.id} to={'/recipe/' + item.id} ><Card item={item} /></Link>
  ))

  const cuisinElement = Data.map(data =>
    <SplideSlide key={data.id} ><Link to={'/cuisines/' + data.title} ><Card item={data} /></Link></SplideSlide>
  )

  return (
    <Box>
      <Heading mb='2rem' fontWeight='400' size='lg' >Cuisines</Heading>
      <Splide
        style={{ padding: '0 0 3rem 0' }}
        options={{
          fixedWidth: 300,
          autoHeight: true,
          gap: 20,
          rewind: true,
          pagination: false,
          focus: 'center',
          arrows: false,
          type: 'loop',
          breakpoints: {
            400: {
              fixedWidth: 200,
            }
          }

        }}
      >
        {cuisinElement}
      </Splide>
      <Heading mb='2rem' fontWeight='400' size='lg' >Popular Recipes</Heading>
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
        :
        <SimpleGrid minChildWidth='15rem' spacing='40px'>
          {cardElement}
        </SimpleGrid>}
    </Box>
  )
};

export default Home;
