import { Route, Routes } from "react-router-dom";
import Cuisines from "./Cuisines";
import Details from "./Details";
import Home from "./Home";
import Search from "./Search";

const Pages = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home isDarkMode={props.isDarkMode} />} />
      <Route path="/search/:search" element={<Search isDarkMode={props.isDarkMode} />} />
      <Route path="/cuisines/:cuisine" element={<Cuisines isDarkMode={props.isDarkMode} />} />
      <Route path="/recipe/:id" element={<Details isDarkMode={props.isDarkMode} />} />
    </Routes>
  )
};

export default Pages;
