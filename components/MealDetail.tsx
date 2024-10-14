import { StyleSheet, Text, View } from "react-native"

interface IProps {
  duration: number
  complexity: string
  affordability: string
  style?: object
  textStyle?: object
}

const MealDetail = ({ duration, complexity, affordability, style, textStyle }: IProps) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={textStyle}>{duration}m</Text>
      <Text style={textStyle}>{complexity.toUpperCase()}</Text>
      <Text style={textStyle}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetail

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginHorizontal: 20,
    justifyContent: 'space-around'
  },
})