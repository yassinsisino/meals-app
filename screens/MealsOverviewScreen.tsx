import { useLayoutEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const MealsList = MEALS.filter(meal =>
    meal.categoryIds.indexOf(catId) >= 0
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title
    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId, navigation])

  const renderMealItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealDetail', { mealId: itemData.item.id })
    }
    return <MealItem item={itemData.item} onPress={pressHandler} />
  }

  return (
    <FlatList
      data={MealsList}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
})