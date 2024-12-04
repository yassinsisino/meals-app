import { useLayoutEffect } from "react"
import { StyleSheet, View, Text, Image, ScrollView } from "react-native"
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

import MealDetail from "../components/MealDetail"
import Subtitle from "../components/mealDetail/Subtitle"
import List from "../components/mealDetail/List"
import IconButton from '../components/IconButton'

import { MEALS } from "../data/dummy-data"
// import { FavoritesContext } from "../store/context/favorites-context"

type TMeal = {
  affordability: string,
  complexity: string
}

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealsContext = useContext(FavoritesContext)
  const dispatch = useDispatch()
  const favoritesMealsIds = useSelector(state => state.favoriteMeals.ids)

  const mealId = route.params.mealId
  const isMealFavorite = favoritesMealsIds.includes(mealId)

  const changeFavoritesStatusHandler = () => {
    if (isMealFavorite)
      // favoriteMealsContext.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    else
      // favoriteMealsContext.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }))
  }

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return (
            <IconButton
              icon={isMealFavorite ? "star" : "star-outline"}
              color="white"
              onPress={changeFavoritesStatusHandler}
            />
          )
        }
      }
    )
  }, [navigation, changeFavoritesStatusHandler])

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const { affordability, complexity, duration, imageUrl, title, ingredients, steps } = selectedMeal



  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <MealDetail affordability={affordability} complexity={complexity} duration={duration} textStyle={styles.mealDetailText} />

        <View style={styles.listeOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle subtitle={"Ingredients"} />
            <List data={ingredients} />
            <Subtitle subtitle={"Steps"} />
            <List data={steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  root: {
    marginBottom: 32
  },
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  mealDetailText: {
    color: 'white'
  },
  listContainer: {
    maxWidth: '80%'
  },
  listeOuterContainer: {
    alignItems: 'center'
  }
})
