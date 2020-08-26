/** @format */

import React, { useState } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button,
    Modal,
} from 'react-native'
import AddMeal from '../components/AddMeal'
const MealsScreen = (props) => {
    const [addLogVisibility, setAddLogVisibility] = useState(false)

    const modalHandler = () => {
        setAddLogVisibility(!addLogVisibility)
    }

    return (
        <View style={styles.screen}>
            <Text> This is the Meals Screen</Text>
            <View style={styles.bottom}>
                <Button
                    style={styles.button}
                    title='Add Entry'
                    onPress={() => {
                        modalHandler()
                    }}
                />
            </View>
            <Modal animationType='slide' visible={addLogVisibility}>
                <AddMeal modalHandler={modalHandler} />
            </Modal>
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
    button: {
        display: 'flex',
        alignItems: 'flex-end',
    },
    bottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
})
export default MealsScreen
