import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import { app } from '../App';
import colors from '../colors';
import { auth } from '../firebaseConfig';

const analytics = getAnalytics(app);

const createUser = (auth, email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			alert('User created', user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
			Alert.log(errorCode, errorMessage)
		});
};
const Splash = () => {

	const [email, setEmail] = useState(0);

	return (
		<KeyboardAvoidingView style={styles.container} >
			<Image
				style={styles.logo}
				source={require('../assets/logo.png')}
			/>
			<Text style={styles.text}>Inserisci il nome della squadra</Text>
			<TextInput
				style={styles.input}
				placeholder="Nome della squadra"
				keyboardType="default"
				onChangeText={(text) => setEmail(text)}
				value={email}
			/>
			<TouchableOpacity style={styles.button} onPress={() => { createUser(auth, email, 'Test123!') }}>
				<Text style={styles.buttonText}> Entra </Text>
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
		width: 250,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: colors.grayLight,
		colors: colors.white,
		backgroundColor: colors.white,
		marginBottom: 10,
	},
	button: {
		width: 250,
		height: 44,
		backgroundColor: colors.primary,
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
