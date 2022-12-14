import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    fonts: {
        heading: `'Ubuntu', sans-serif`,
        body: `'Ubuntu', sans-serif`,
    }
})

export default theme