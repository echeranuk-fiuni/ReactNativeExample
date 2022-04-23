import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { useLogin } from '../api/sessions';
import AppText from '../components/AppText';
import SessionContext from '../contexts/sessionContext';

const LoginPage = () => {

    const { sessionToken, setSessionToken } = useContext(SessionContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {
        call,
        data,
        error,
        loading
    } = useLogin();

    useEffect(() => {
        if (data) {
            const token = data.token;
            setSessionToken(`Bearer ${token}`);
        }
    }, [data]);

    if (sessionToken) {
        return <></>;
    }

    const handleLogin = () => {
        call({
            body: {
                username,
                password,
            }
        });
    };

    return (
        <View>
            {loading && <View><Text>Cargando...</Text></View>}
            {error && <View><Text>Error: {error}</Text></View>}
            <AppText>Usuario:</AppText>
            <TextInput value={username} onChangeText={setUsername} />
            <AppText>Contrasena:</AppText>
            <TextInput value={password} onChangeText={setPassword} />
            <Button title='Login' onPress={handleLogin} />
        </View>
    )
};

export default LoginPage;