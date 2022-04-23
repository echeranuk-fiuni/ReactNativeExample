import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AppText from './AppText';

const UserForm = props => {
    const { onUserSubmit = () => {}, userOnEdit = undefined } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('ADMIN');

    const cleanForm = () => {
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setRole('ADMIN');
    };

    const fillForm = user => {
        setFirstName(user?.firstName || '');
        setLastName(user?.lastName || '');
        setUsername(user?.username || '');
        setPassword(user?.password || '');
        setRole(user?.role || 'ADMIN');
    };

    useEffect(() => {
        fillForm(userOnEdit);
    }, [userOnEdit]);

    const handleSubmit = () => {
        onUserSubmit({
            firstName,
            lastName,
            username,
            password,
            role,
        });
        cleanForm();
    };

    return (
        <View style={props.style}>
            <AppText>Formulario de Usuario</AppText>
            <AppText>Nombre:</AppText>
            <TextInput value={firstName} onChangeText={setFirstName} />
            <AppText>Apellido:</AppText>
            <TextInput value={lastName} onChangeText={setLastName} />
            <AppText>Usuario:</AppText>
            <TextInput value={username} onChangeText={setUsername} />
            <AppText>Contrasena:</AppText>
            <TextInput secureTextEntry value={password} onChangeText={setPassword} />
            <AppText>Rol:</AppText>
            <Picker
                selectedValue={role}
                onValueChange={setRole}
            >
                <Picker.Item label='Administrador' value='ADMIN' />
                <Picker.Item label='Cliente' value='CUSTOMER' />
            </Picker>
            <Button title='Guardar' onPress={handleSubmit} />
        </View>
    );
};

export default UserForm;