import { StyleSheet, Text, View } from 'react-native';
import { Spacer } from 'react-native-expo-utilities';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Example</Text>
      <Spacer vertical={50} />
      <Text>Example</Text>
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
