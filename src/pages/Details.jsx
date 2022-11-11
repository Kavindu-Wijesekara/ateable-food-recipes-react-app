import { useEffect, useState } from 'react';
import { Box, Center, Badge, Heading, Image, Stack, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react';
import { BiLike } from 'react-icons/bi';
import { FaHeartbeat } from 'react-icons/fa';
import { Circles } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api';

function Details() {
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
                // const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
                // const data = await res.json()

                getRecipeDetails(id)
                    .then((data) => {
                        savedRecipes.push(data)
                        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes))
                        setDetails(data)
                        setIsLoading(false)
                    })


            } catch (error) {
                console.log(error)
            }
        }

    }

    useEffect(() => {
        getData(params.id)
    }, [params.id])


    return (
        <>
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
                <>
                    <Heading fontWeight='400' mb='2rem' size='lg'>{detail.title}</Heading>

                    <Stack
                        direction={['column', null, 'row']}
                        justifyContent='start'
                        alignItems={['start', null, 'center']}
                        w='100%'
                        gap='2rem'
                    >
                        <Box borderRadius='2rem' objectFit='cover' overflow='hidden'>
                            <Image src={detail.image ? detail.image : 'https://i.ibb.co/q1yQjj0/lid-closed.png'} alt={detail.image} />
                        </Box>
                        <VStack alignItems='flex-start' >
                            <Text size='md' display='flex' alignItems='center' columnGap='10px' ><BiLike /> {detail.aggregateLikes}</Text>
                            <Text size='md' display='flex' alignItems='center' columnGap='10px' ><FaHeartbeat /> {detail.healthScore}</Text>
                            <Text>Cuisines:
                                {
                                    detail.cuisines.length > 0
                                        ? detail.cuisines?.map(type => (
                                            <Link key={type} to={'/cuisines/' + type} target='_blank' >
                                                <Badge borderRadius={2} ml='.5rem' mr='.5rem'>{type}</Badge>
                                            </Link>
                                        ))
                                        : ' No cuisines.'
                                }
                            </Text>
                            <Text>Occasions:
                                {
                                    detail.occasions.length > 0
                                        ? detail.occasions?.map(type => (
                                            <Badge key={type} borderRadius={2} ml='.5rem' mr='.5rem'>{type}</Badge>
                                        ))
                                        : ' No occasions.'
                                }
                            </Text>
                            <Text>Diets:
                                {
                                    detail.diets.length > 0
                                        ? detail.diets?.map(type => (
                                            <Badge key={type} borderRadius={2} mr='.5rem'>{type}</Badge>
                                        ))
                                        : ' No diets.'
                                }
                            </Text>
                        </VStack>
                    </Stack>

                    <Box mt='2rem'>
                        <Heading size='md' mb='2rem'>Summary</Heading>
                        <Text
                            bg='#FAFAFA'
                            _dark={{
                                'bg': '#D0D2D4'
                            }}
                            color='black'
                            p='20px'
                            textAlign='justify'
                            borderRadius='5px'
                            dangerouslySetInnerHTML={{ __html: detail.summary }}
                        >
                        </Text>
                    </Box>

                    <Box mt='2rem'>
                        <Heading size='md' mb='2rem'>Ingredients</Heading>
                        <Box
                            bg='#FAFAFA'
                            _dark={{
                                'bg': '#D0D2D4'
                            }}
                            color='black'
                            p='20px'
                            textAlign='justify'
                            borderRadius='5px'
                        >
                            <UnorderedList>
                                {detail.extendedIngredients?.map((ingredient) => (
                                    <ListItem key={ingredient.id} >{ingredient.original}</ListItem>
                                ))}
                            </UnorderedList>
                        </Box>
                    </Box>

                    <Box mt='2rem'>
                        <Heading size='md' mb='2rem'>Instructions</Heading>
                        <Text
                            bg='#FAFAFA'
                            _dark={{
                                'bg': '#D0D2D4'
                            }}
                            color='black'
                            p='20px'
                            textAlign='justify'
                            borderRadius='5px'
                            dangerouslySetInnerHTML={{ __html: detail.instructions }}
                        >
                        </Text>
                    </Box>

                </>}
        </>
    )
}

export default Details