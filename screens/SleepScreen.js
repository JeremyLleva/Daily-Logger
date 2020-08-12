/** @format */

import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const SleepScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text> This is the Sleep Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SleepScreen
