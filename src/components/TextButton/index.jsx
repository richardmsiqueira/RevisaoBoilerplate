import { View, Text } from 'react-native'

import styles from './styles'

const TextButton = ({ textButton }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{textButton}</Text>
        </View>
    )
}

export default TextButton;