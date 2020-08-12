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
import DateTimePicker from '@react-native-community/datetimepicker'

const MealsScreen = (props) => {
    const [date, setDate] = useState(new Date())
    const [addLogVisibility, setAddLogVisibility] = useState(false)
    return (
        <View style={styles.screen}>
            <Text> This is the Meals Screen</Text>
            <Button
                title='Add Entry'
                onPress={() => {
                    setAddLogVisibility(true)
                }}
            />
            <Modal animationType='slide' visible={addLogVisibility}>
                <View style={styles.modalContainer}>
                    <Text>Create a entry!</Text>
                    <View style={styles.modalButtons}>
                        <Button
                            title='Add'
                            onPress={() => {
                                setAddLogVisibility(false)
                            }}
                        />
                    </View>
                    <View style={styles.modalButtons}>
                        <Button
                            title='Cancel'
                            onPress={() => {
                                setAddLogVisibility(false)
                            }}
                        />
                    </View>
                    <DateTimePicker value={date} />
                </View>
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
