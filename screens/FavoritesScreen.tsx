import { StyleSheet, Text, View } from "react-native"
import MealsList from "../components/mealsList/MealsList"
// import { FavoritesContext } from "../store/context/favorites-context"
// import { useContext } from "react"
import { MEALS } from "../data/dummy-data"
import { useSelector, UseSelector } from "react-redux"

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext)
  // const { ids } = favoriteMealsCtx

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMealsList = MEALS.filter(meal => favoriteMealIds.includes(meal.id))


  if (favoriteMealsList.length === 0) {
    return (
      <View style={sytles.container}>
        <Text style={sytles.text}>You do not have any favorite meal yet.</Text>
      </View>
    )
  }

  return (
    <MealsList mealsList={favoriteMealsList} />
  )
}

export default FavoritesScreen

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})