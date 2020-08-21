/** @format */

import React, { useState } from 'react'
import {
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    View,
    Button,
    Modal,
} from 'react-native'
import { useForm } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker'

const AddMeal = (props) => {
    const { handleSubmit, register, setValue, errors } = useForm()
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showTimerPicker, setShowTimerPicker] = useState(false)
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShowDatePicker(false)
        setDate(currentDate)
    }
    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShowTimerPicker(false)
        setTime(currentDate)
    }
    return (
        <View style={styles.modalContainer}>
            <Text>Create a entry!</Text>
            <View style={styles.form}>
                <TextInput
                    title='Meal'
                    styles={styles.input}
                    placeholder='Meal Name'
                />
                <View style={styles.dateFormContainer}>
                    <Text style={styles.dateTimeText}>
                        {date.getFullYear() +
                            '/' +
                            (date.getMonth() + 1) +
                            '/' +
                            date.getDate()}
                    </Text>
                    <Button
                        title='Date'
                        onPress={() => {
                            setShowDatePicker(true)
                        }}
                    />
                </View>
                {showDatePicker && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display='default'
                        onChangeDate={onChangeDate}
                    />
                )}
                <View style={styles.dateFormContainer}>
                    <Text>{time.toLocaleTimeString('en-US')}</Text>
                    <Button
                        title='Time'
                        onPress={() => {
                            setShowDatePicker(true)
                        }}
                    />
                </View>
                {showTimerPicker && (
                    <DateTimePicker
                        testID='dateTimePicker'
                        value={time}
                        mode={'date'}
                        is24Hour={true}
                        display='default'
                        onChange={onChangeTime}
                    />
                )}
            </View>
            <View style={styles.modalButtons}>
                <Button
                    title='Cancel'
                    onPress={() => {
                        props.modalHandler()
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        padding: 10,
    },
    dateFormContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    input: {
        textAlign: 'right',
    },
    dateTimeText: {
        textAlign: 'left',
    },
})

export default AddMeal
