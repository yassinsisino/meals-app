import { useLayoutEffect } from "react"
import { StyleSheet, View, Text, Image, ScrollView, Button } from "react-native"

import MealDetail from "../components/MealDetail"
import Subtitle from "../components/mealDetail/Subtitle"
import List from "../components/mealDetail/List"
import IconButton from '../components/IconButton'

import { MEALS } from "../data/dummy-data"

type TMeal = {
  affordability: string,
  complexity: string
}

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId

  const headerButtonHandler = () => {
    console.log('header button tap')
  }

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => {
          return (
            <IconButton
              icon="star"
              color="white"
              onPress={headerButtonHandler}
            />
          )
        }
      }
    )
  }, [navigation])

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
