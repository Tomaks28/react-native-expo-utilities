import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeExpoUtilities from 'react-native-expo-utilities';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeExpoUtilities.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
