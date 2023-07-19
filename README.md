[![Netlify Status](https://api.netlify.com/api/v1/badges/a76d9125-8cb6-44e4-bad9-aee4b9b47efb/deploy-status)](https://app.netlify.com/sites/ateable/deploys)

# Ateable Recipe Site made of React


## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
This is the first web site that i have made using React and you can use it for search food recipes.

### Screenshot

![](./screenshots/ateable%20full%20w.png)
![](./screenshots/ateable%20full%20b.png)
![](./screenshots/ateable%20full%20details.png)
![](./screenshots/ateable%20mobile%20details.png)
![](./screenshots/mobile%20search.png)


### Links

- Live Site URL: [Click here to preview the website](https://ateable.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- React Router Dom
- Axois
- React Icons
- [Chakra-UI](https://chakra-ui.com/)
- [spoonacular API](https://spoonacular.com/food-api)


### What I learned

Used axois to fetch data from the spooncular API.

```js
export const getPopularRecipes = async () => {
    try {
        const recipes = await axios.get(`${baseURL}/random?number=20&${key}`)
        return (recipes.data.recipes)
    } catch (error) {
        console.log(error);
    }
}
```

## Author

- Twitter - [@KavinduT8456](https://twitter.com/KavinduT8456)
