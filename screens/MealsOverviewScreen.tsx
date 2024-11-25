import { useLayoutEffect } from "react"


import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealsList from "../components/mealsList/MealsList"

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId

  const mealsList = MEALS.filter(meal =>
    meal.categoryIds.indexOf(catId) >= 0
  )

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title
    navigation.setOptions({
      title: categoryTitle
    })
  }, [catId, navigation])


  return (
    <MealsList mealsList={mealsList} />
  )
}

export default MealsOverviewScreen

