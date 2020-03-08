import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default Logo = props => {
	return (
		<View style={styles.container}>
			<Text>LOGO</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        width: Dimensions.get('screen').width / 2.5,
        height: Dimensions.get('screen').width / 2.5,
        borderRadius: Dimensions.get('screen').width / 2.5,
		backgroundColor: '#CCC',
		justifyContent: 'center',
		alignItems: 'center',
	}
});
