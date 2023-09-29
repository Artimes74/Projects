import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Spacing} from '../../../utils/constant/constant';

export default function Main() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('parallaxEffectList');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => onPress()} style={styles.buttons}>
        <Text style={[styles.buttonText]}>Animated effect for list</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginVertical: Spacing,
  },
  buttonText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'DancingScript-Medium',
  },
});
