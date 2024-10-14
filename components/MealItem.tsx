import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetail from "./MealDetail"

interface IProps {
  item: {
    id: string,
    categoryIds: [string],
    title: string
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: [string],
    steps: [string],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean,
  }
  onPress: () => void
}

const MealItem = ({ item, onPress }: { onPress: IProps['onPress'], item: IProps["item"] }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={onPress}
      >
        <View style={styles.innerComponent}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetail duration={item.duration} complexity={item.complexity} affordability={item.affordability} />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16
  },
  innerComponent: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5
  },
})
