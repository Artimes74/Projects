import {Dimensions} from 'react-native';

export const SPACING: number = 10;
export const {width, height} = Dimensions.get('screen');
export const ITEM_CONTAINER = width * 0.85;
export const ITEM_WIDTH = width * 0.7;
export const ITEM_HEIGHT = height * 0.5;
export const Spacing = 10;
export const DOUBLE = 84;
export const SHADOW_CONFIG = {
  shadowColor: 'rgba(0,0,0,0.26)',
  shadowOpacity: 1,
  shadowRadius: 4,
  shadowOffset: {width: 0, height: 10},
  elevation: 5,
};
export const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};
