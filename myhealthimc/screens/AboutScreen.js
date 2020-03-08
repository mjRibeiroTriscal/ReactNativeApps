import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Mário 2</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		marginTop: 24,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
