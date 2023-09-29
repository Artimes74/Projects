import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import {mainStackParams} from '../../route/stack';
import {SPACING} from '../../../utils/constant/constant';

const Main = () => {
  type navigationType = StackNavigationProp<mainStackParams, 'main'>;
  const navigation = useNavigation<navigationType>();
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
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginVertical: SPACING,
  },
  buttonText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'DancingScript-Medium',
  },
});
