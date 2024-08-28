import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import TextButton from '../TextButton';

const MyButton = ({ screen, name }) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(screen)}>
        <TextButton textButton={name} />
    </TouchableOpacity>
  )
};

export default MyButton

