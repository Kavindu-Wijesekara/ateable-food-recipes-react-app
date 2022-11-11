import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Pages from "./pages/Pages";
import theme from "./theme";

export default function App() {

    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <BrowserRouter>
                <Flex direction='column' minH='100vh' >
                    <NavBar />
                    <Pages />
                    <Footer />
                </Flex>
            </BrowserRouter>
        </ChakraProvider>
    )
}