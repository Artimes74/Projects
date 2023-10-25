import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {RouteProp} from '@react-navigation/native';
import {mainStackParams} from '../../../route/stack';
const {width, height} = Dimensions.get('screen');
type Props = {
  data: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
  }[];
  index: number;
};
type typeOfPagePropsRouter = RouteProp<mainStackParams, 'foodSelected'>;
const AnimatedImage = (props: Props) => {
  const {data, index} = props;
  return (
    <View
      style={{
        width: width * 1.2,
        height: height / 1.9,
        position: 'absolute',
        top: -width / 2.8,
        right: -width / 2.6,
        zIndex: 8,
        borderRadius: width / 2,
      }}>
      <SharedElement id={`img${index}`}>
        <Image
          source={data[index].image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: width / 2,
          }}
        />
      </SharedElement>
    </View>
  );
};

AnimatedImage.SharedElement = (route: typeOfPagePropsRouter) => {
  const {data, index} = route.params;
  //   return data.map((item, index) => `im${index}`);
  return [
    {
      id: `img${index}`,
    },
    {
      id: `txt${index}`,
    },
  ];
};

export default AnimatedImage;

const styles = StyleSheet.create({});
