import React from 'react';
import { View } from 'react-native';
import AppText from './AppText';

const StudentsList = props => {

    const getStudentItem = student => {
        const { id, firstName, lastName, age, carreer, declared } = student;
        return (
            <View key={id}>
                <AppText>
                    {id}: {firstName} {lastName} ({String(age)} - {carreer} - {declared ? 'Matriculado' : 'No Matriculado'})
                    <AppText onPress={() => props.onRemove(id)}> X </AppText>
                    <AppText onPress={() => props.onEdit(student)}> E </AppText>
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