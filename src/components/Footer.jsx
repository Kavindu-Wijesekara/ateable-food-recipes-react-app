import { VStack, Text } from "@chakra-ui/react"

export default function Footer() {
    return (
        <VStack
            as='footer'
            align='center'
            justifyContent='center'
            w='100%'
            px='5%'
            py={3}
            lineHeight='1'
            mt='2rem'
            boxShadow='0px -20px 25px -5px rgb(0 0 0 / 10%), 0 -10px 10px -5px rgb(0 0 0 / 4%)'
        >
            <Text fontSize='.8rem' >Copyright © MoGoS, {new Date().getFullYear()}</Text>
            <Text fontSize='.8rem' >All Rights Reserved</Text>
        </VStack>
    )
}
