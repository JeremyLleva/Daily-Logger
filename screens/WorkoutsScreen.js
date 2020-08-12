/** @format */

import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const WorkoutsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the Workouts Screen</Text>
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

export default WorkoutsScreen
