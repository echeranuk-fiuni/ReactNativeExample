import { useIsFocused } from '@react-navigation/native';
import { useEffect, useContext } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { useLogout } from '../../api/sessions';
import { useDeleteUser, useListUsers } from '../../api/users';
import UsersList from '../../components/UsersList';
import SessionContext from '../../contexts/sessionContext';
import styles from '../../styles';

const UsersPage = props => {
  const navigation = props.navigation;
  
  const { sessionToken, setSessionToken, validationError, setValidationError } = useContext(SessionContext);
  const { 
    call: listUsers, 
    data: users, 
    error: listUsersError, 
    loading: listUsersLoading 
  } = useListUsers();
  const {
    call: deleteUser,
    data: deleteUserData,
    error: deleteUserError,
    loading: deleteUserLoading,
  } = useDeleteUser();
  const {
    call: logout,
  } = useLogout();
  const focused = useIsFocused();

  useEffect(() => {
    if(sessionToken && focused){
      listUsers();
    }
  }, [sessionToken, focused]);

  useEffect(() => {
    if (deleteUserData) {
      listUsers();
    }
  }, [deleteUserData]);

  const error = listUsersError || deleteUserError;
  const loading = listUsersLoading || deleteUserLoading;

  const handleUserRemove = id => {
    setValidationError(undefined);
    deleteUser({id});
  };

  const handleUserEdit = user => {
    navigation.navigate('Users', { screen: 'Form', params: { userId: user?.id, userName: `${user?.firstName} ${user?.lastName}` } });
  };

  const handleLogout = async () => {
    await logout();
    setSessionToken(undefined);
    navigation.navigate("Login");
  };

  const goToUser = id => {
    navigation.navigate("Users", { screen: 'Show', params: { userId: id } });
  }

  return (
      <View style={styles.container}>
        {loading && <View><Text>Cargando...</Text></View>}
        {error && !validationError && <View><Text>Error: {error}</Text></View>}
        {validationError && <View><Text>Error de validacion: {validationError}</Text></View>}
        <Button title='Logout' onPress={handleLogout} />
        <ScrollView style={styles.list}>
          <UsersList
            data={users || []}
            onEdit={handleUserEdit}
            onRemove={handleUserRemove}
            onShow={goToUser}
          />
        </ScrollView>
        <Button title="Agregar usuario" onPress={() => navigation.navigate("Users", { screen: 'Form' })} />
        <Button title="Volver a Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Ayuda" onPress={() => navigation.navigate("Home", { screen: "Help", params: { text: 'Ayudame!' } })} />
      </View>
  );
};

export default UsersPage;