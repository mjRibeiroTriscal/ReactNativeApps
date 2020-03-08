import * as React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import BackButtonBar from '../components/BackButtonBar'
import ImcCalculator from '../components/ImcCalculator'
// import AdsBottom from '../components/AdsBottom'

export default function ImcScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <BackButtonBar size={35} nav={navigation} />
            <ImcCalculator />
            {/* <AdsBottom /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		marginTop: 24,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
});
