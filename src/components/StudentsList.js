import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import AppText from './AppText';

const editImg = require('../img/edit.png');
const deleteImg = require('../img/delete.png');

const StudentsList = props => {

    const getStudentItem = student => {
        const { id, firstName, lastName, age, carreer, declared } = student;
        return (
            <View key={id}>
                <AppText>
                    {id}: {firstName} {lastName} ({String(age)} - {carreer} - {declared ? 'Matriculado' : 'No Matriculado'})
                    <TouchableOpacity onPress={() => props.onRemove(id)}>
                        <Image style={styles.icon} source={deleteImg} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.onEdit(student)}>
                        <Image style={styles.icon} source={editImg} />
                    </TouchableOpacity>
                </AppText>
            </View>
        );
    };

    return (
        <View>
            <AppText>Lista de Estudiantes:</AppText>
            {props.data.map(
                student => 
                getStudentItem(student)
            )}
        </View>
    );
};

export default StudentsList;