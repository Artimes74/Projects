import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {mainStackParams} from '../../route/stack';
import AnimatedImage from './component/animatedImage';
import {iconProps} from '../../../utils/type/parallaxEffectList/parallaxEffectListType';
import {Path, Svg} from 'react-native-svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {FoodIconPack} from '../../../assets/icons/foodIconPack';
const {width, height} = Dimensions.get('screen');

type Props = {};
const SPRING_CONFIG = {
  damping: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};
type typeOfPagePropsRouter = RouteProp<mainStackParams, 'foodSelected'>;
const SelectedFood = () => {
  const route = useRoute<typeOfPagePropsRouter>();
  const {
    params: {id, data, index, title},
  } = route;
  type navigationType = StackNavigationProp<
    mainStackParams,
    'parallaxEffectList'
  >;
  const navigation = useNavigation<navigationType>();
  const animatedHeight = useSharedValue<number>(height * 0.21);
  const animatedOptionsHeight = useSharedValue<number>(width * 0.6);
  const animatedOptionsWidth = useSharedValue<number>(width * 0.46);
  const [animated, setAnimated] = React.useState<boolean>(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: withSpring(animatedHeight.value, SPRING_CONFIG),
    };
  });
  const animatedStyleWidth = useAnimatedStyle(() => {
    return {
      height: withTiming(animatedOptionsHeight.value),
      width: withTiming(animatedOptionsWidth.value),
    };
  });
  React.useEffect(() => {
    animatedHeight.value = height * 0.21;
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Pressable
        style={[styles.button]}
        onPress={() => {
          animatedHeight.value = height;
          navigation.goBack();
        }}>
        <BackIcon width={42} height={42} />
        <Text style={styles.appBarText}>back</Text>
      </Pressable>
      <AnimatedImage data={data} index={index} />
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: width,
            alignSelf: 'center',
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowRadius: 3,
            shadowOffset: {width: 0, height: 0},
            shadowColor: '#000',
            shadowOpacity: 0.4,
            elevation: 4,
          },
          animatedStyle,
        ]}>
        <View
          style={{
            width: '95%',
            height: height,
            marginTop: 30,
          }}>
          <SharedElement id={`txt${data[index].title}`}>
            <Text
              style={{
                fontFamily: 'DancingScript-Medium',
                fontWeight: 'bold',
                fontSize: 45,
                color: 'rgb(36, 1, 92)',
                // position: 'absolute',r
              }}>
              {title}
            </Text>
          </SharedElement>
          <SharedElement id={`option${data[index].option.price}`}>
            <Animated.View
              style={[
                {
                  width: width * 0.46,
                  justifyContent: 'space-around',
                  // alignItems: 'flex-start',
                  // flexDirection: animated?'row':'column',
                  marginTop: 20,
                },
                animatedStyleWidth,
              ]}>
              <IconAndValue
                iconName="price"
                value={data[index].option.price}
                animatedValue={animated}
              />
              <IconAndValue
                iconName="delivery"
                value={data[index].option.delivery}
                animatedValue={animated}
              />
              <IconAndValue
                iconName="time"
                value={data[index].option.time}
                animatedValue={animated}
              />
            </Animated.View>
          </SharedElement>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEnabled={true}
            onScroll={ev => {
              // console.log(ev.nativeEvent.contentOffset.y);
              if (ev.nativeEvent.contentOffset.y > 5) {
                setAnimated(true);
                animatedOptionsHeight.value = width * 0.09;
                animatedOptionsWidth.value = width * 0.95;
              } else {
                setAnimated(false);
                animatedOptionsHeight.value = width * 0.6;
                animatedOptionsWidth.value = width * 0.46;
              }
            }}
            style={{marginTop: 5}}>
            <SharedElement id={`des${data[index].description}`}>
              <Text
                style={{
                  fontFamily: 'DancingScript-Medium',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'rgb(36, 1, 92)',
                  marginBottom: 260,
                  // position: 'absolute',
                }}>
                {data[index].description}
              </Text>
            </SharedElement>
          </ScrollView>
        </View>
      </Animated.View>
    </View>
  );
};

type iconAndValueProps = {
  iconName: string;
  value: string;
  animatedValue: boolean;
};

const IconAndValue = (props: iconAndValueProps) => {
  const {iconName, value, animatedValue} = props;
  const animatedWidth = useSharedValue<number>(width * 0.46);
  const animatedTranslateY = useSharedValue<number>(0);
  const animatedTranslateX = useSharedValue<number>(0);
  const animatedFontSize = useSharedValue<number>(30);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animatedWidth.value),
      transform: [
        {
          translateY: withTiming(animatedTranslateY.value),
        },
        {
          translateX: withTiming(animatedTranslateX.value),
        },
      ],
    };
  });
  const textAnimatedStyled = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(animatedFontSize.value),
    };
  });
  React.useEffect(() => {
    animatedWidth.value = animatedValue ? width * 0.3 : width * 0.46;
    animatedTranslateX.value = animatedValue
      ? iconName === 'price'
        ? 4
        : iconName === 'time'
        ? width * 0.325
        : width * 0.64
      : 0;
    animatedTranslateY.value = animatedValue
      ? iconName === 'price'
        ? 13
        : iconName === 'time'
        ? -13
        : 0
      : 0;
    animatedFontSize.value = animatedValue ? 22 : 30;
  }, [animatedValue]);
  const unit = (item: string) => {
    switch (item) {
      case 'price':
        return '$';
      case 'delivery':
        return '$';
      case 'time':
        return 'm';
    }
  };
  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: width * 0.08,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        animatedStyle,
      ]}>
      <IconRender iconName={iconName} />
      <Animated.Text
        style={[
          {
            fontFamily: 'DancingScript-Medium',
            fontWeight: 'bold',
            fontSize: 30,
            color: 'rgb(36, 1, 92)',
            position: 'absolute',
            right: 25,
          },
          textAnimatedStyled,
        ]}>
        {value + ' ' + unit(iconName)}
      </Animated.Text>
    </Animated.View>
  );
};

type iconRenderProps = {
  iconName: string;
};

const IconRender = (props: iconRenderProps) => {
  const {iconName} = props;
  // console.log(iconName);
  return FoodIconPack(iconName, 31, 31)?.icon;
};

SelectedFood.sharedElements = (route: typeOfPagePropsRouter) => {
  const {data, index} = route.params;
  return [
    {
      id: `img${index}`,
      animation: 'move',
    },
    {
      id: `txt${data[index].title}`,
      animation: 'fade',
    },
    {
      id: `option${data[index].option.price}`,
      animation: 'fade',
    },
    {
      id: `des${data[index].description}`,
      animation: 'fade',
    },
  ];
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

export default SelectedFood;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
    zIndex: 10,
  },
  appBarText: {
    fontFamily: 'DancingScript-Medium',
    fontSize: 30,
  },
});
