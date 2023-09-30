import {NavigationContainer, RouteProp} from '@react-navigation/native';

import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import Main from '../screens/main/main';
import ParallaxEffectList from '../screens/ParallaxEffectList/parallaxEffecList';
import BottomNavigation from '../screens/bottomNavigation/bottomNavigation';

export type mainStackParams = {
  main: undefined;
  parallaxEffectList: undefined;
  bottomNavigation: undefined;
};

const Stack = createStackNavigator<mainStackParams>();

const SCREEN_OPTION:
  | StackNavigationOptions
  | ((props: {route: RouteProp<mainStackParams>}) => any) = {
  headerShown: false,
};

const TypeScriptStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={SCREEN_OPTION}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen
          name="parallaxEffectList"
          component={ParallaxEffectList}
        />
        <Stack.Screen name="bottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TypeScriptStackNavigator;
