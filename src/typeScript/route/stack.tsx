import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';

import {
  StackNavigationOptions,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import Main from '../screens/main/main';
import ParallaxEffectList from '../screens/ParallaxEffectList/parallaxEffecList';
import BottomNavigation from '../screens/bottomNavigation/bottomNavigation';
import CustomCarousel from '../screens/customCarousel/customCarousel';
import FoodOrder from '../screens/foodOrder/foodOrder';
import selectedFood from '../screens/foodOrder/selectedFood';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {ImageSourcePropType} from 'react-native';

export type mainStackParams = {
  main: undefined;
  parallaxEffectList: undefined;
  bottomNavigation: undefined;
  foodOrder: undefined;
  foodSelected: {
    id: string;
    index: number;
    title: string;
    data: {
      image: ImageSourcePropType;
      title: string;
      option: {price: string; delivery: string; time: string};
      description: string;
    }[];
  };
};

const Stack = createSharedElementStackNavigator<mainStackParams>();

const SCREEN_OPTION:
  | StackNavigationOptions
  | ((props: {route: RouteProp<mainStackParams, 'main'>}) => any) = {
  headerShown: false,
};

const TypeScriptStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={SCREEN_OPTION}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="foodOrder" component={FoodOrder} />
        {/* <Stack.Screen name="main" component={Main} /> */}
        <Stack.Screen
          name="parallaxEffectList"
          component={ParallaxEffectList}
        />
        <Stack.Screen name="bottomNavigation" component={BottomNavigation} />
        <Stack.Screen
          name="foodSelected"
          component={selectedFood}
          options={
            (TransitionPresets.ModalSlideFromBottomIOS,
            {
              gestureEnabled: true,
              // cardStyleInterpolator: ({current: {progress}}) => {
              //   return {
              //     cardStyle: {
              //       // opacity: progress,
              //     },
              //   };
              // },
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TypeScriptStackNavigator;
