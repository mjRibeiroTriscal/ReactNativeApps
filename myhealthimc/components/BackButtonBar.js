import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default BackButtonBar = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.nav.navigate('Home')} >
                <Ionicons
                    name='ios-arrow-back'
                    size={props.size}
                    color={Colors.buttonBack}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
    },
});
