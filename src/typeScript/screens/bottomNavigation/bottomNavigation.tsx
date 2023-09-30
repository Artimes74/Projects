import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BottomNavigation</Text>
    </SafeAreaView>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
