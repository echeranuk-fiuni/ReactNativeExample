import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useGetUser } from '../../api/users';

const UserPage = props => {
    const navigation = props.navigation;
    const userId = props.route?.params?.userId;
    const {
        call,
        data: user,
        loading,
        error,
    } = useGetUser();

    useEffect(() => {
        if (userId) {
            call({ id: userId });
        }
    }, [userId]);

    if (loading) {
        return <View><Text>Cargando...</Text></View>;
    }

    if (error) {
        return <View><Text>Error: {error}</Text></View>;
    }

    return (
        <View>
            <Text>Nombre: {user?.firstName} </Text>
            <Text>Apellido: {user?.lastName} </Text>
            <Text>Usuario: {user?.username} </Text>
            <Text>Rol: {user?.role} </Text>
            <Button title="Volver" onPress={() => navigation.navigate('Users', { screen: 'List'})} />
        </View>
    )
};

export default UserPage;