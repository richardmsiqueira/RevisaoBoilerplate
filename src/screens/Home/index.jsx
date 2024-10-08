import { View } from 'react-native'

import styles from './styles' 
import MyButton from '../../components/MyButton'
import Title from '../../components/Title'

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home Screen"} />
      <MyButton screen={"Totoro"} name={"Go to Totoro"} />
      <MyButton screen={"Ghibli"} name={"Go to Ghibli"} />
    </View>
  )
}
