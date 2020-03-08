import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

export default BoxMenu = props => {
	return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => props.nav.navigate(props.label)}
        >
			<Text>{props.label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
        width: Dimensions.get('screen').width / 2.5,
        height: Dimensions.get('screen').width / 2.5,
        borderRadius: 20,
		backgroundColor: '#CCC',
		justifyContent: 'center',
		alignItems: 'center',
	}
});
