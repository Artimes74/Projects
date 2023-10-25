import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import {useNavigation} from '@react-navigation/native';
import {mainStackParams} from '../../route/stack';
import {SPACING} from '../../../utils/constant/constant';
import {iconProps} from '../../../utils/type/parallaxEffectList/parallaxEffectListType';
import {Path, Svg} from 'react-native-svg';
const {width, height} = Dimensions.get('screen');

const Main = () => {
  type navigationType = StackNavigationProp<mainStackParams, 'main'>;
  const navigation = useNavigation<navigationType>();
  const onPress = (item: string) => {
    // @ts-ignore
    navigation.navigate(item);
  };
  const data: {name: string; to: string}[] = [
    {name: 'food List', to: 'foodOrder'},
    // {name: 'bottom Navigation', to: 'bottomNavigation'},
    {name: 'Parallax Effect List', to: 'parallaxEffectList'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      {data.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => onPress(item.to)}
          style={styles.buttons}>
          <Text style={[styles.buttonText]}>{item.name}</Text>
          {/* <BackIcon width={32} height={32} /> */}
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

const BackIcon: React.FC<iconProps> = props => {
  const {width, height, color} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      style={{
        transform: [
          {
            rotate: '180deg',
          },
        ],
      }}>
      <Path
        d="M9.931 12.0002L13.752 8.17915C14.166 7.76515 14.166 7.09315 13.752 6.67915C13.338 6.26515 12.666 6.26515 12.252 6.67915L7.638 11.2932C7.247 11.6842 7.247 12.3172 7.638 12.7072L12.252 17.3212C12.666 17.7352 13.338 17.7352 13.752 17.3212C14.166 16.9072 14.166 16.2352 13.752 15.8212L9.931 12.0002Z"
        strokeLinejoin="round"
        fill={color ? color : 'black'}
      />
    </Svg>
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
    // width: width * 0.8,
    // height: width * 0.18,
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#fff',
    marginVertical: SPACING,
    elevation: 4,
    shadowColor: 'rgba(0,0,0,.7)',
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 0},
  },
  buttonText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'DancingScript-Medium',
  },
});
