import { FlatList } from "react-native"
import { MEALS } from "../../data/dummy-data"
import MealItem from "./MealItem"

const MealsList = ({ mealsList }) => {

  const renderMealItem = (itemData) => {
    return <MealItem item={itemData.item} />
  }


  return (
    <FlatList
      data={mealsList}
      renderItem={renderMealItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default MealsList