import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }

        if(username=='Hamas' && password=='test') {
            navigation.navigate('Home', {username: 'Hamas'})
            return;
        }else{
            Alert.alert('Invalid Credentials', 'Please enter a valid username and password');
            return;
        }

    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.link} onPress={() => navigation.navigate('Register')} >Don't have an account? Sign up</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    label: { fontSize: 16, marginBottom: 8, color: "#333"},
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#000'
    },
    button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    link: { color: '#007bff', marginTop: 15, textAlign: 'center' },   
});

export default LoginScreen;
