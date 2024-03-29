// In App.js in a new project
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import FlashMessage from 'react-native-flash-message';

import Activities from './screens/Activities';
import Splash from './screens/Splash';

import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerTintColor: 'black',
					headerStyle: {
						backgroundColor: '#000000'
					},
				}} >
				<Stack.Screen name="Home" component={Splash} />
				<Stack.Screen name="Activities" component={Activities} />
			</Stack.Navigator>
			<FlashMessage position="top" />
		</NavigationContainer>
	);
}

export default App;