import { View } from 'react-native'
import styles from './styles' 
import MyButton from '../../components/MyButton'
import Title from '../../components/Title'

export default function Ghibli() {
  return (
    <View style={styles.container}>
      <Title title={"Ghibli Screen"} />
      <MyButton screen={"Home"} name={"Go to Home"} />
      <MyButton screen={"Totoro"} name={"Go to Totoro"} />
    </View>
  )
}
