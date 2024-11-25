import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id: string) => { },
  removeFavorite: (id: string) => { }
})


const FavoritesContextProvider = ({ children }) => {

  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentIds) => [...currentIds, id])
  }

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentIds) => {
      return currentIds.filter((currentId) => currentId !== id)
    })
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }


  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider