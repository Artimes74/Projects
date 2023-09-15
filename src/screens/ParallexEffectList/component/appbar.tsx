import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {mainStackParams} from '../../../routes/stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {iconProps} from '../../../utils/type/parallexEffectList/parallexEffectListType';
import {Path, Svg} from 'react-native-svg';

const {width, height} = Dimensions.get('screen');

const AppBar = () => {
  type navigationType = StackNavigationProp<
    mainStackParams,
    'parallaxEffectList'
  >;
  const navigation = useNavigation<navigationType>();
  return (
    <View style={styles.appBar}>
      <Pressable
        style={[styles.button]}
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon width={32} height={32} />
        <Text style={styles.appBarText}>back</Text>
      </Pressable>
    </View>
  );
};

const BackIcon: React.FC<iconProps> = props => {
  const {width, height, color} = props;
  return (
    <Svg width={width} height={height} viewBox={`0 0 24 24`} fill="none">
      <Path
        d="M9.931 12.0002L13.752 8.17915C14.166 7.76515 14.166 7.09315 13.752 6.67915C13.338 6.26515 12.666 6.26515 12.252 6.67915L7.638 11.2932C7.247 11.6842 7.247 12.3172 7.638 12.7072L12.252 17.3212C12.666 17.7352 13.338 17.7352 13.752 17.3212C14.166 16.9072 14.166 16.2352 13.752 15.8212L9.931 12.0002Z"
        strokeLinejoin="round"
        fill={color ? color : 'black'}
      />
    </Svg>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    top: 0,
    width,
    height: width * 0.15,
    justifyContent: 'center',
    zIndex: 1,
  },
  button: {
    position: 'absolute',
    left: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarText: {
    fontFamily: 'DancingScript-Medium',
    fontSize: 20,
  },
});
