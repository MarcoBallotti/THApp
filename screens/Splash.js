import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';

import { app } from '../App';
import colors from '../colors';
import { auth } from '../firebaseConfig';

const analytics = getAnalytics(app);



const Splash = ({ navigation }) => {
	const createUser = (auth, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				showMessage({
					message: "Utente creato, ora puoi accedere 🪄",
					type: "success",
					icon: 'auto',
					duration: 5000,
					autoHide: true,
					position: 'top',
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				let humaneErrorMessage = errorMessage.replace('Firebase:', '');
				if (humaneErrorMessage.includes('email-already-in-use')) {
					humaneErrorMessage = 'Email già in uso';
				}
				showMessage({
					message: "Errore nella creazione dell'utente: " + humaneErrorMessage,
					type: "danger",
					icon: 'auto',
					duration: 5000,
					autoHide: true,
					position: 'top',
				});
			});
	};

	const signinUser = (auth, email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigation.replace('Activities');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				showMessage({
					message: errorMessage,
					type: "danger",
					icon: 'auto',
					duration: 5000,
					autoHide: true,
					position: 'top',
				});
			});
	};

	const [email, setEmail] = useState(0);
	const [password, setPassword] = useState(0);

	return (
		<KeyboardAvoidingView style={styles.container} >
			<Image
				style={styles.logo}
				source={require('../assets/logo.png')}
			/>
			<Text style={styles.text}>Inserisci email e password per accedere</Text>
			<TextInput
				style={styles.input}
				placeholder="email"
				keyboardType="email-address"
				onChangeText={(text) => setEmail(text)}
				autoCapitalize="none"
				value={email}
			/>
			<TextInput
				style={styles.input}
				placeholder="password"
				keyboardType="password"
				secureTextEntry={true}
				autoCapitalize="none"
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>
			<TouchableOpacity style={styles.button} onPress={() => { signinUser(auth, email, password) }}>
				<Text style={styles.buttonText}> Entra </Text>
			</TouchableOpacity>
			<TouchableOpacity style={[styles.button, { marginTop: 10, backgroundColor: colors.primary }]} onPress={() => { createUser(auth, email, password) }}>
				<Text style={styles.buttonText}> Crea utente </Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.black,
	},
	logo: {
		width: 150,
		height: 150,
		marginBottom: 20,
	},
	input: {
		width: 300,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: colors.grayLight,
		colors: colors.white,
		backgroundColor: colors.white,
		marginBottom: 10,
	},
	button: {
		width: 300,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
	},
	text: {
		color: colors.white,
		fontSize: 20,
		marginBottom: 20,
	},

};

export default Splash;
