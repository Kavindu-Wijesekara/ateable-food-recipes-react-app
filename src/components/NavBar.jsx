import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flex, Box, Text, useColorMode, Stack, IconButton, InputGroup, InputRightElement, Input, Spacer, chakra } from '@chakra-ui/react'
import { FaMoon, FaSun, } from 'react-icons/fa'
import { IoIosSearch, IoMdClose } from 'react-icons/io'

export default function NavBar() {
    // const [search, setSearch] = useState('')
    const { colorMode, toggleColorMode } = useColorMode()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    const searchRef = useRef()

    function onSubmit(e) {
        e.preventDefault()
        navigate('/search/' + searchRef.current.value)
    }

    return (
        <Flex
            as='nav'
            align='center'
            wrap='wrap'
            w='100%'
            px='5%'
            py={4}
            boxShadow='xl'
            zIndex='10'
            fontFamily="Fuzzy Bubbles, cursive"
        >
            <Box >
                <Text
                    fontSize='2xl'
                    fontWeight='bold'
                >
                    <Link to={'/'} >ateable</Link>
                </Text>
            </Box>

            <Spacer />

            <IconButton
                borderRadius='100%'
                aria-label='Color mode'
                onClick={toggleColorMode}
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            />

            <Box
                ml={2}
                display={{ base: 'block', sm: 'none' }}
            >
                <IconButton aria-label='Menu' onClick={() => setIsOpen(!isOpen)} icon={isOpen ? <IoMdClose /> : <IoIosSearch />} />
            </Box>

            <Box
                display={{ base: isOpen ? 'block' : 'none', sm: 'block' }}
                flexBasis={{ base: '100%', sm: 'auto' }}
                ml={2}
            >
                <Stack
                    align="center"
                    justify={['center', 'flex-end']}
                    direction={['column', 'row']}
                    pt={[4, 0]}
                >
                    <chakra.form width={{ base: '100%', sm: '15rem' }} onSubmit={onSubmit} >
                        <InputGroup size='md' width={{ base: '100%', sm: '15rem' }}>
                            <Input
                                variant='flushed'
                                placeholder='Search Recipes...'
                                pl='10px'
                                type='text'
                                ref={searchRef}
                                required
                            />
                            <InputRightElement width='2.5rem'>
                                <IconButton
                                    size='sm'
                                    aria-label='Search'
                                    type='submit'
                                    bg='transparent'
                                    borderRadius='100%'
                                    icon={<IoIosSearch />}
                                />
                            </InputRightElement>
                        </InputGroup>
                    </chakra.form>
                </Stack>
            </Box>
        </Flex>
    );
}
