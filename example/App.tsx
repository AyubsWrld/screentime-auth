import { StyleSheet, Text, View } from 'react-native';

import * as ScreentimeAuth from 'screentime-auth';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ScreentimeAuth.hello()}</Text>
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
