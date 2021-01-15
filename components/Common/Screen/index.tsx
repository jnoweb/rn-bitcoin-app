import * as React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

interface Props {
  title: string;
  children: React.ReactNode;
  loading: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  content: {
    alignContent: 'center',
    flex: 1,
    width: '100%',
  },
  header: {
    fontSize: 25,
    width: '100%',
    textAlign: 'center',
    marginVertical: 20
  },
  loading: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
});

function Screen({ title, children, loading, ...props }: Props) {
  return (
    <SafeAreaView>
      <View style={styles.container} {...props}>
        <Text style={styles.header}>{title}</Text>
        <View style={styles.content}>
          {!loading && children}
          {loading && <Text style={styles.loading}>Loading...</Text>}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Screen;
