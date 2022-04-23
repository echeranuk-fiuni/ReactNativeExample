import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import AppText from './AppText';

const editImg = require('../img/edit.png');
const deleteImg = require('../img/delete.png');

const UsersList = props => {

    const getUserItem = user => {
        const { id, firstName, lastName, username, role } = user;
        return (
            <View key={id}>
                <AppText>
                    {id}: {firstName} {lastName} ({username} - {role})
                    <TouchableOpacity onPress={() => props.onRemove(id)}>
                        <Image style={styles.icon} source={deleteImg} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.onEdit(user)}>
                        <Image style={styles.icon} source={editImg} />
                    </TouchableOpacity>
                </AppText>
            </View>
        );
    };

    return (
        <View>
            <AppText>Lista de Usuarios:</AppText>
            {props.data.map(
                user => 
                getUserItem(user)
            )}
        </View>
    );
};

export default UsersList;