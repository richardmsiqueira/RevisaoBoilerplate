import { View, Text, TouchableOpacity } from 'react-native'
import MyButton from '../../components/MyButton'
import styles from './styles'
import Title from '../../components/Title'

export default function Totoro() {
  return (
    <View style={styles.container}>
      <Title title={"Totoro Screen"} />
      <MyButton screen={"Home"} name={"Go to Home"} />
    </View>
  )
}
