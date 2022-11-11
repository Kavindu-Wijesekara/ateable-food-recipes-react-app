import { FaHeartbeat } from "react-icons/fa";
import { Box, Image, Heading, Flex, VStack, chakra } from '@chakra-ui/react';

function Card({ item }) {
    return (
        <Box
            borderRadius='2rem'
            cursor='pointer'
            minH='20rem'
            overflow='hidden'
            position='relative'
            boxShadow='9px 6px 9px rgba(0, 0, 0, 0.39)'
        >
            <Image
                src={item.image ? item.image : 'https://i.ibb.co/q1yQjj0/lid-closed.png'}
                alt={item.title}
                h='100%'
                objectFit='cover'
                position='absolute'
                w='100%'
            />
            <Box
                pos='absolute'
                bg='linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(15,15,112,0) 50%, rgba(0,0,0,0.711922268907563) 100%)'
                h='100%'
                w='100%'
                zIndex='10'
            ></Box>
            <VStack
                zIndex='10'
                position='absolute'
                color='white'
                bottom='0'
                w='100%'
                p='1rem'
                textAlign='center'

            >
                <Heading size='s' fontWeight='400' >{item.title}</Heading>
                {item.healthScore && <Flex
                    mt='0 !important'
                    alignItems='center'
                    gap='0.5rem'
                    color={item.healthScore >= 0 && item.healthScore > 70 ? "green.400" : item.healthScore > 30 ? "blue.400" : "red.400"}
                >
                    <FaHeartbeat />
                    <chakra.span>{item.healthScore}</chakra.span>
                </Flex>}
            </VStack>
        </Box>
    )
}

export default Card