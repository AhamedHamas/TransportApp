import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!username || !email || !password) {
            Alert.alert('Error', 'All fields are required!');
            return;
        }
        if (!email.includes('@')) {
            Alert.alert('Error', 'Enter a valid email address!');
            return;
        }
        if (confirmPassword!=password) {
            Alert.alert('Error', 'Password and Retyped password does not match');
            return;
        }

        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
            style={styles.input}
            secureTextEntry={true}  
            value={password}
            onChangeText={setPassword}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? Log in</Text>
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
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    link: { color: '#007bff', marginTop: 15, textAlign: 'center' },
});

export default RegisterScreen;
