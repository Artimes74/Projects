import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import {mainStackParams} from '../../route/stack';
import {SPACING} from '../../../utils/constant/constant';

const Main = () => {
  type navigationType = StackNavigationProp<mainStackParams, 'main'>;
  const navigation = useNavigation<navigationType>();
  const onPress = (item: string) => {
    // @ts-ignore
    navigation.navigate(item);
  };
  const data: {name: string; to: string}[] = [
    {name: 'Parallax Effect List', to: 'parallaxEffectList'},
    {name: 'bottom Navigation', to: 'bottomNavigation'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      {data.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => onPress(item.to)}
          style={styles.buttons}>
          <Text style={[styles.buttonText]}>{item.name}</Text>
        </Pressable>
      ))}
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
