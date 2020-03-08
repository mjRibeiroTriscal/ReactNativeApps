import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default Ads = props => {
	return (
		<View style={styles.container}>
			<Text>ADS</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
        width: Dimensions.get('screen').width / 1.1,
        height: Dimensions.get('screen').width / 2.5,
        borderRadius: 20,
		backgroundColor: '#CCC',
		justifyContent: 'center',
		alignItems: 'center',
	}
});
