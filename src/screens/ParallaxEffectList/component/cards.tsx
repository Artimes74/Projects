import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import {cardsProps} from '../../../utils/type/parallaxEffectList/parallaxEffectListType';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');
const ITEM_CONTAINER = width * 0.85;
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = height * 0.5;
const SHADOW_CONFIG = {
  shadowColor: 'rgba(0,0,0,0.26)',
  shadowOpacity: 1,
  shadowRadius: 4,
  shadowOffset: {width: 0, height: 10},
  elevation: 5,
};
const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const Cards: React.FC<cardsProps> = props => {
  const {item, index, translateX} = props;

  const imageAnimatedStyle = useAnimatedStyle(() => {
    let eq = Math.abs(translateX.value) / ITEM_CONTAINER;

    const TRANSLATE_X = interpolate(
      translateX.value,
      [
        (index - 1) * ITEM_CONTAINER,
        index * ITEM_CONTAINER,
        (index + 1) * ITEM_CONTAINER,
      ],
      [eq, -ITEM_WIDTH / 1.9 - eq, 20 + eq],
    );

    return {
      transform: [
        {
          translateX: withSpring(TRANSLATE_X, SPRING_CONFIG),
        },
      ],
    };
  });

  const AnimatedText = useAnimatedStyle(() => {
    const OPACITY = interpolate(
      translateX.value,
      [
        (index - 1) * ITEM_CONTAINER,
        index * ITEM_CONTAINER,
        (index + 1) * ITEM_CONTAINER,
      ],

      [0, 1, 0],
    );

    return {
      opacity: withSpring(OPACITY),
    };
  });

  return (
    <View
      style={[
        {
          width: ITEM_CONTAINER,
          justifyContent: 'center',
          alignItems: 'center',
        },
        {...SHADOW_CONFIG},
      ]}>
      <Animated.View key={item.id} style={[styles.card]}>
        <Animated.Image
          // if you want to import link just add inside the data and then uncomment first part and comment second part
          // source={{uri: item.image}}
          source={item.image}
          resizeMethod={'resize'}
          resizeMode={'center'}
          style={[styles.images, imageAnimatedStyle]}
        />
        <Animated.Text style={[styles.name, AnimatedText, {color: item.color}]}>
          {item.name}
        </Animated.Text>
        <Animated.Text style={[styles.description, AnimatedText]}>
          {item.description}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  images: {
    width: width + ITEM_CONTAINER,
    height: height,
    alignSelf: 'center',
  },
  name: {
    position: 'absolute',
    bottom: ITEM_WIDTH / 3.5,
    color: 'white',
    fontWeight: '800',
    fontSize: 45,
    left: 10,
  },
  description: {
    position: 'absolute',
    bottom: ITEM_WIDTH / 9,
    color: 'white',
    // fontWeight: '100',
    fontSize: 25,
    left: 10,
    fontFamily: 'DancingScript-Medium',
  },
});
