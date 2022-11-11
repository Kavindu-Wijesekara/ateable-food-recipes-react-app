import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Cuisines from "./Cuisines";
import Details from "./Details";
import Home from "./Home";
import Search from "./Search";

const Pages = () => {
  return (
    <Box
      as='main'
      flexGrow={1}
      _dark={{
        bg: "#1A202C",
      }}
      py='2rem'
      px={['5%', null, '10%']}
      w="100%"
      // alignItems="center"
      justifyContent="center"
      wrap='wrap'
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/cuisines/:cuisine" element={<Cuisines />} />
        <Route path="/recipe/:id" element={<Details />} />
      </Routes>
    </Box>
  )
};

export default Pages;
