import axios from 'axios'

// export const getPopularRecipes = () => {
//     return "hi"
//     const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`)
//     const data = await api.json()
//     return data.recipes
// }

const baseURL = 'https://api.spoonacular.com/recipes'
const key = `apiKey=${process.env.REACT_APP_API_KEY}`

export const getPopularRecipes = async () => {
    try {
        const recipes = await axios.get(`${baseURL}/random?number=20&${key}`)
        return (recipes.data.recipes)
    } catch (error) {
        console.log(error);
    }
}

export const getCuisineRecipes = async (cuisine) => {
    try {
        const recipes = await axios.get(`${baseURL}/complexSearch?number=20&cuisine=${cuisine}&${key}`)
        return recipes.data.results
    } catch (error) {
        console.log(error);
    }
}

export const getRecipeDetails = async (id) => {
    try {
        const details = await axios.get(`${baseURL}/${id}/information?${key}`)
        return details.data
    } catch (error) {
        console.log(error);
    }
}

export const getSearchResults = async (query) => {
    try {
        const recipes = await axios.get(`${baseURL}/complexSearch?number=20&query=${query}&${key}`)
        return recipes.data.results
    } catch (error) {
        console.log(error);
    }
}