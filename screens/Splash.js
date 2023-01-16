import React from 'react';
import { Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';

import colors from '../colors';

const Splash = () => {
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
			/>
			<TouchableOpacity style={styles.button} onPress={() => alert('Button pressed')}>
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
