import React, { useContext, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useCreateUser, useGetUser, useUpdateUser } from '../../api/users';
import UserForm from '../../components/UserForm';
import SessionContext from '../../contexts/sessionContext';
import styles from '../../styles';

const UserFormPage = props => {

    const navigation = props.navigation;
    const userId = props.route?.params?.userId;
    const { validationError, setValidationError } = useContext(SessionContext);
    const {
        call: createUser,
        data: createUserData,
        error: createUserError,
        loading: createUserLoading
    } = useCreateUser();
    const {
        call: updateUser,
        data: updateUserData,
        error: updateUserError,
        loading: updateUserLoading,
    } = useUpdateUser();
    const {
        call: getUser,
        data: getUserData,
        error: getUserError,
        loading: getUserLoading,
    } = useGetUser();

    useEffect(() => {
        if (userId) {
            getUser({ id: userId });
        }
    }, [userId]);

    useEffect(() => {
        if (updateUserData || createUserData) {
            navigation.navigate('Users', { screen: 'List' });
        }
    }, [updateUserData, createUserData])

    const handleUserSubmit = user => {
        setValidationError(undefined);
        if (getUserData) {
            // Update
            updateUser({
                id: getUserData.id,
                body: user,
            });
        } else {
            // Create
            createUser({ body: user });
        }
    };

    const loading = createUserLoading || updateUserLoading || getUserLoading;
    const error = createUserError || updateUserError || getUserError || validationError;

    return (
        <View>
            {loading && <Text>Cargando...</Text>}
            {error && <Text>Error: {error}</Text>}
            <UserForm 
                style={styles.form}
                onUserSubmit={handleUserSubmit}
                userOnEdit={getUserData}
            />
            <Button title="Volver" onPress={() => navigation.navigate("Users", { screen: 'List' })} />
        </View>
    );
};

export default UserFormPage;