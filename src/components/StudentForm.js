import React, { useState, useEffect } from 'react';
import { View, TextInput, Switch, Button } from 'react-native';
import AppText from './AppText';

const StudentForm = props => {
    const { onStudentSubmit = () => {}, studentOnEdit = undefined } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(18);
    const [carreer, setCarreer] = useState('');
    const [declared, setDeclared] = useState(false);

    const cleanForm = () => {
        setFirstName('');
        setLastName('');
        setAge(18);
        setCarreer('');
        setDeclared(false);
    };

    const fillForm = student => {
        setFirstName(student?.firstName || '');
        setLastName(student?.lastName || '');
        setAge(student?.age || 18);
        setCarreer(student?.carreer || '');
        setDeclared(student?.declared || false);
    };

    useEffect(() => {
        fillForm(studentOnEdit);
    }, [studentOnEdit]);

    const handleSubmit = () => {
        onStudentSubmit({
            firstName,
            lastName,
            age,
            carreer,
            declared
        });
        cleanForm();
    };

    return (
        <View>
            <AppText>Formulario de Estudiante</AppText>
            <AppText>Nombre:</AppText>
            <TextInput value={firstName} onChangeText={setFirstName} />
            <AppText>Apellido:</AppText>
            <TextInput value={lastName} onChangeText={setLastName} />
            <AppText>Edad:</AppText>
            <TextInput keyboardType="numeric" value={String(age)} onChangeText={text => setAge(Number(text))} />
            <AppText>Carrera:</AppText>
            <TextInput value={carreer} onChangeText={setCarreer} />
            <AppText>Matriculado:</AppText>
            <Switch value={declared} onValueChange={setDeclared} />
            <Button title='Guardar' onPress={handleSubmit} />
        </View>
    );
};

export default StudentForm;