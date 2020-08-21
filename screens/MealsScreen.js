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
            <Button
                title='Add Entry'
                onPress={() => {
                    modalHandler()
                }}
            />
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
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtons: {
        padding: 10,
    },
})
export default MealsScreen
