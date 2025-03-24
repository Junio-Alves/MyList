// CustomDateTimePicker.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Modal, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { style } from './styles';
const CustomDateTimePicker = ({ type, onDateChange, show, setShow }:any) => {
    const [date, setDate] = React.useState(new Date());

    useEffect(() => {
        if (onDateChange) {
            onDateChange(date); // Chama o callback sempre que a data muda
        }
    }, [date, onDateChange]);

    const onChange = (event:DateTimePickerEvent, selectedDate?:Date) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false); // Oculta o picker após a seleção
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={show}
            onRequestClose={() => setShow(false)}
        >
            <View style={style.modalOverlay}>
                <View style={style.container}>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={type}
                        is24Hour={true}
                        display={Platform.OS === 'ios' ? 'inline' : 'default'}
                        onChange={onChange}
                    />
                </View>
            </View>
        </Modal>
    );
};
export default CustomDateTimePicker;