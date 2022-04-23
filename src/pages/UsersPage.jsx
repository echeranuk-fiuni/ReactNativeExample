import { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { useCreateUser, useDeleteUser, useListUsers, useUpdateUser } from '../api/users';
import UserForm from '../components/UserForm';
import UsersList from '../components/UsersList';
import SessionContext from '../contexts/sessionContext';
import styles from '../styles';

const UsersPage = () => {
  const { sessionToken, setSessionToken } = useContext(SessionContext);
  const [userOnEdit, setUserOnEdit] = useState(undefined);
  const { 
    call: listUsers, 
    data: users, 
    error: listUsersError, 
    loading: listUsersLoading 
  } = useListUsers();
  const { 
    call: createUser, 
    data: createUserData, 
    error: createUserError, 
    loading: createUserLoading 
  } = useCreateUser();
  const {
    call: deleteUser,
    data: deleteUserData,
    error: deleteUserError,
    loading: deleteUserLoading,
  } = useDeleteUser();
  const {
    call: updateUser,
    data: updateUserData,
    error: updateUserError,
    loading: updateUserLoading,
  } = useUpdateUser();

  useEffect(() => {
    if(sessionToken){
      listUsers();
    }
  }, [sessionToken]);

  useEffect(() => {
    if (createUserData || deleteUserData || updateUserData) {
      listUsers();
    }
  }, [createUserData, deleteUserData, updateUserData]);

  if (!sessionToken) {
    return <></>;
  }

  const error = listUsersError || createUserError || deleteUserError || updateUserError;
  const loading = listUsersLoading || createUserLoading || deleteUserLoading || updateUserLoading;

  const handleUserSubmit = user => {
    if (userOnEdit) {
      // Update
      updateUser({
        id: userOnEdit.id,
        body: user,
      });
    } else {
      // Create
      createUser({body: user});
    }
    setUserOnEdit(undefined);
  };

  const handleUserRemove = id => {
    deleteUser({id});
  };

  const handleUserEdit = user => {
    setUserOnEdit(user);
  };

  const handleLogout = () => {
    setSessionToken(undefined);
  };

  return (
      <View style={styles.container}>
        {loading && <View><Text>Cargando...</Text></View>}
        {error && <View><Text>Error: {error}</Text></View>}
        <Button title='Logout' onPress={handleLogout} />
        <ScrollView style={styles.list}>
          <UsersList
            data={users || []}
            onEdit={handleUserEdit}
            onRemove={handleUserRemove}
          />
        </ScrollView>
        <View style={styles.form}>
          <UserForm
            style={styles.bordered}
            onUserSubmit={handleUserSubmit}
            userOnEdit={userOnEdit}
          />
        </View>
      </View>
  );
};

export default UsersPage;