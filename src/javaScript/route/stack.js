import {NavigationContainer, RouteProp} from '@react-navigation/native';

import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import Main from '../screens/main/main';
import ParallaxEffectList from '../screens/parallaxEffectList/parallaxEffectList';

const Stack = createStackNavigator();

const SCREEN_OPTION = {
  headerShown: false,
};

const JavaScriptStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={SCREEN_OPTION}>
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen
          name="parallaxEffectList"
          component={ParallaxEffectList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default JavaScriptStackNavigator;
