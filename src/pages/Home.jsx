import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/sea-green';
import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Data from "../cuisines";

const Home = (props) => {
  const [popular, setPopular] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPopular()
  }, [])

  const getPopular = async () => {
    // const checkPopular = localStorage.getItem('popularR')

    // if (checkPopular) {
    //   setPopular(JSON.parse(checkPopular))
    //   setIsLoading(false)
    // } else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await api.json()
    // localStorage.setItem("popularR", JSON.stringify(data.recipes))
    setIsLoading(false)
    setPopular(data.recipes)
    // }
  }

  const cardElement = popular.map(item => (
    <Link key={item.id} to={'/recipe/' + item.id} ><Card item={item} /></Link>
  ))

  const cuisinElement = Data.map(data =>
    <SplideSlide key={data.id} ><Link to={'/cuisines/' + data.title} ><Card item={data} /></Link></SplideSlide>
  )

  return (
    <div className={props.isDarkMode ? "home dark" : "home"}>
      <h2 className="home--heading" >Cuisines</h2>
      <Splide
        style={{ padding: '0 0 3rem 0' }}
        options={{
          type: 'loop',
          width: '100%',
          perPage: '4',
          gap: '2rem',
          arrows: false,
        }}
      >
        {cuisinElement}
      </Splide>
      <h2 className="home--heading" >Popular Recipes</h2>
      {isLoading
        ? <Circles
          height="40"
          width="40"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass="loading"
          visible={true}
        />
        : <div className="grid">
          {cardElement}
        </div>}
    </div>
  )
};

export default Home;
