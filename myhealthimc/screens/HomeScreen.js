import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import BoxMenu from '../components/BoxMenu'
import Logo from '../components/Logo'
import Ads from '../components/Ads'

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Logo />
			</View>
			<View style={styles.btnContainer}>
				<BoxMenu label='Imc' nav={navigation} />
				<BoxMenu label='About' nav={navigation} />
			</View>
			<View style={styles.adsContainer}>
				<Ads />
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 24,
		backgroundColor: '#fff',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	logoContainer: {
		// flex: 1,
		width: Dimensions.get('screen').width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnContainer: {
		// flex: 2,
		width: Dimensions.get('screen').width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	adsContainer: {
		// flex: 2,
		width: Dimensions.get('screen').width,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
