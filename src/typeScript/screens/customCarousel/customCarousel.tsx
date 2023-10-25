import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Transition, {
  CurvedTransition,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  SharedValue,
  SlideOutRight,
} from 'react-native-reanimated';
import {FlingGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/flingGesture';
// @ts-ignore
import Pizza1 from '../../../assets/images/customCarousel/pizza1.png';
// @ts-ignore
import Pizza2 from '../../../assets/images/customCarousel/pizza2.png';
// @ts-ignore
import Pizza3 from '../../../assets/images/customCarousel/pizza3.png';
// @ts-ignore
import Pizza4 from '../../../assets/images/customCarousel/pizza4.png';
import {FoodIconPack} from '../../../assets/icons/foodIconPack';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import posed, {Transition as PoseTransition} from 'react-native-pose';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {mainStackParams} from '../../route/stack';
import {SharedElement} from 'react-navigation-shared-element';

const {width, height} = Dimensions.get('screen');
type Props = {
  // height: number;
  data: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
    description: string;
  }[];
  selected: number;
  selectedIndex: number;
};
type RenderComponentProps = {
  index: number;
  data: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
    description: string;
  }[];
  // animatedValue: Animated.SharedValue<number>;
};
type optionsProps = {
  options: {
    time: string;
    delivery: string;
    price: string;
  };
  index: number;
  data: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
    description: string;
  }[];
};
type iconAndValueProps = {
  iconName: string;
  value: string;
};
type iconRenderProps = {
  iconName: string;
};

const data: {
  image: ImageSourcePropType;
  title: string;
  option: {price: string; delivery: string; time: string};
  description: string;
}[] = [
  {
    // image:
    //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-291.jpg?w=1380&t=st=1696673233~exp=1696673833~hmac=4c83aa33b6811a1c4928c6d8fb086f4d39e1f37ba3b56d5bfadb9161f53a9786',
    image: Pizza1,
    title: 'chef Pizza',
    option: {price: '100', delivery: '110', time: '120'},
    description:
      'For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish.',
  },
  {
    // image:
    //   'https://img.freepik.com/free-photo/mushroom-pizza-vegetarian-white-background-isolated-still-life-copy-space-top-view-flat-lay_639032-295.jpg?w=1380&t=st=1696673237~exp=1696673837~hmac=0da7a890a83fa47abe2d53b9139d8401ccc49a4323deb45c68093efeb3818a9b',
    image: Pizza2,
    title: 'margarita pizza',
    option: {price: '70', delivery: '80', time: '90'},
    description:
      'Pizza can be traced back to Naples, Italy in the middle ages. Although the origin of the word pizza is not clear, the Italians are credited with coining the term pizza. It is though that the word could have come from the Italian word point, pizziare, meaning to pinch or pluck, or a verb meaning to sting or to season. Who would have thought that pizza will soon be the favorite dish of many? I love pizza so much that I don’t think I can live without it.',
  },
  {
    // image:
    //   'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=1380&t=st=1696673314~exp=1696673914~hmac=27b153ed545f4ac136bc7b57c122c67780329cd5a815b7a0e5b14c19db31afc4',
    image: Pizza3,
    title: 'vegetable pizza',

    option: {price: '40', delivery: '50', time: '60'},
    description:
      'Do you consider yourself to be a good cook? Or are you the type of person who finds cooking to be difficult? If not or even so, there is a quick and easy way to satisfy your own as well as your guest’s appetites. It involves making pizza from scratch- with the exception of using store bought or already prepared French bread. Many may be already wondering: why choose fresh pizza over frozen or restaurant pizzas? First of all it’s cheaper, second it’s healthier, third you know what’s on it, fourth it’s quicker compared to restaurants, but most importantly you can create them accordingly to your own preferences.There are only a few basic steps in making a pizza, but first of all it is important to know and discuss the advantages of doing it yourself.',
  },
  {
    // image:
    //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?w=1380&t=st=1696672490~exp=1696673090~hmac=240f03bee445ffa052be906d715920683407fae2726a2f4b3895412d32eb9b02',
    image: Pizza4,
    title: 'peperoni pizza',
    option: {price: '10', delivery: '20', time: '30'},

    description:
      'When one says their favorite food is pizza, one might feel extremely cliché and basic. However, to me pizza is more than just food, it’s a small player in the attempt for world peace but nobody sees it that way. Personally I was introduced to pizza by my family at a young age because of my Italian background, but growing up, and after eating tons of slices of pizza I had a realization, that realization is that pizza is something almost everyone can agree on. Pizza gives me inspiration in life because of its unique variations and its worldwide acceptance in many countries and cultures. Whether it be homemade, ordered out, or dined in pizza is truly one of, if not the most inspiring to life in general. Pizza and its variations can mean a lot of things; including its shape, variable toppings and ways to make it. Ever notice that a pizza is round, in a square box, and cut into triangle slices',
  },
];

const CustomCarousel = (props: Props) => {
  const {data, selected, selectedIndex} = props;
  const [index, setIndex] = React.useState<number>(selectedIndex);
  const activeIndex = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const setActiveIndex = React.useCallback((newIndex: number) => {
    setIndex(newIndex);
    activeIndex.value = newIndex;
    translateY.value = newIndex;
  }, []);
  const animatedStyles = useAnimatedStyle(() => {
    const translateYInterpolate = interpolate(
      translateY.value,
      [-1, 0, 1],
      [height, 0, -height],
    );
    return {
      transform: [
        {
          translateY: withTiming(translateYInterpolate, {
            duration: 400,
          }),
        },
      ],
    };
  });

  const changer = React.useCallback(() => {
    setIndex(0);
    setIndex(0);
    setIndex(0);
  }, [index]);
  React.useEffect(() => {
    changer();
    console.log(index);
  }, [data]);
  return (
    <View style={[styles.container, {height: height}]}>
      <View style={[styles.foodsAndDetails]}>
        <FlingGestureHandler
          key={'up'}
          direction={Directions.UP}
          onHandlerStateChange={ev => {
            if (ev.nativeEvent.state === State.END) {
              if (index === data.length - 1) {
                return;
              }
              setActiveIndex(index + 1);
            }
          }}>
          <FlingGestureHandler
            key={'down'}
            direction={Directions.DOWN}
            onHandlerStateChange={ev => {
              if (ev.nativeEvent.state === State.END) {
                if (index === 0) {
                  return;
                }
                setActiveIndex(index - 1);
              }
            }}>
            <View style={{flex: 1}}>
              <Animated.View
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    height: height + 10 * data.length,
                  },
                  animatedStyles,
                ]}>
                {data.map((_, i) => {
                  return (
                    <View
                      key={i}
                      style={[
                        {
                          height: height,
                          backgroundColor: i % 2 === 0 ? '#fff' : '#fff',
                        },
                      ]}></View>
                  );
                })}
              </Animated.View>
              <View style={{flex: 1}}>
                <TT
                  height={height}
                  data={data}
                  activeIndex={index}
                  translateY={translateY}
                  // animatedOpacity={animatedOpacity}
                />
                {/* <TT animatedValue={translateY} /> */}
              </View>
              <ImageRender
                data={data}
                index={index}
                // animatedValue={translateY}
              />
            </View>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </View>
    </View>
  );
};

const ImageRender = (props: RenderComponentProps) => {
  const {index, data} = props;
  const PosedView = posed.View({
    enter: {opacity: 1, rotate: '0deg'},
    exit: {opacity: 0, rotate: '180deg'},
  });
  type navigation = StackNavigationProp<mainStackParams>;
  const navigation = useNavigation<navigation>();
  return (
    <PoseTransition>
      {index % 2 === 0 ? (
        <PosedView key="image0" style={styles.imageContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('foodSelected', {
                id: `img${index}`,
                data: data,
                index: index,
                title: data[index].title,
              });
            }}>
            <SharedElement id={`img${index}`}>
              {/* <SharedElement id={`img${data[index].image}`}> */}
              <Image
                source={data[index].image}
                style={{
                  width: width * 0.95,
                  height: width * 0.95,
                  borderRadius: (width * 0.95) / 2,
                }}
              />
            </SharedElement>
          </Pressable>
        </PosedView>
      ) : (
        <PosedView key="image1" style={styles.imageContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('foodSelected', {
                id: `img${index}`,
                data: data,
                index: index,
                title: data[index].title,
              });
            }}>
            <SharedElement id={`img${index}`}>
              <Image
                source={data[index].image}
                style={{
                  width: width * 0.95,
                  height: width * 0.95,
                  borderRadius: (width * 0.95) / 2,
                }}
              />
            </SharedElement>
          </Pressable>
        </PosedView>
      )}
    </PoseTransition>
  );
};

type tp = {
  height: number;
  activeIndex: number;
  translateY: SharedValue<number>;
  data: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
    description: string;
  }[];
};

const TT = (props: tp) => {
  const {activeIndex, data, translateY, height} = props;
  const opacity = useSharedValue<number>(0);
  return (
    <View style={[StyleSheet.absoluteFillObject, {}]}>
      {data.map((titles, i) => {
        const opacityStyled = useAnimatedStyle(() => {
          return {
            opacity: withTiming(activeIndex === i ? 1 : 0, {duration: 700}),
          };
        });
        return (
          <Animated.View key={i} style={[opacityStyled]}>
            <TitleRender
              data={data}
              activeIndex={activeIndex}
              opacityStyled={opacityStyled}
              index={i}
              height={height}
            />
            <DescriptionRender
              activeIndex={activeIndex}
              data={data}
              index={i}
              opacityStyled={opacityStyled}
              height={height}
            />
          </Animated.View>
        );
      })}
    </View>
  );
};

type tp2 = {
  height: number;
  activeIndex: number;
  index: number;
  data: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
    description: string;
  }[];
  opacityStyled: {
    opacity: number;
  };
};

const TitleRender = (props: tp2) => {
  const {activeIndex, index, data, opacityStyled, height} = props;

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: width * 0.6,
          height: width,
          top: height / 9,
          left: 20,
        },
      ]}>
      <SharedElement id={`txt${data[index].title}`}>
        <Animated.Text
          style={[
            {
              fontFamily: 'DancingScript-Medium',
              fontWeight: 'bold',
              fontSize: 40,
              color: 'rgb(36, 1, 92)',
            },
          ]}>
          {data[index].title}
        </Animated.Text>
      </SharedElement>
      <FoodOptions options={data[index].option} data={data} index={index} />
    </Animated.View>
  );
};

const FoodOptions = (props: optionsProps) => {
  const {options, data, index} = props;
  return (
    <SharedElement id={`option${data[index].option.price}`}>
      <View
        style={{
          width: width * 0.46,
          height: width * 0.6,
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          marginTop: 40,
        }}>
        <IconAndValue iconName="price" value={options.price} />
        <IconAndValue iconName="delivery" value={options.delivery} />
        <IconAndValue iconName="time" value={options.time} />
      </View>
    </SharedElement>
  );
};

const IconAndValue = (props: iconAndValueProps) => {
  const {iconName, value} = props;
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
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <IconRender iconName={iconName} />
      <Animated.Text
        style={{
          fontFamily: 'DancingScript-Medium',
          fontWeight: 'bold',
          fontSize: 30,
          color: 'rgb(36, 1, 92)',
          position: 'absolute',
          right: 25,
        }}>
        {value + ' ' + unit(iconName)}
      </Animated.Text>
    </View>
  );
};

const IconRender = (props: iconRenderProps) => {
  const {iconName} = props;
  // console.log(iconName);
  return FoodIconPack(iconName, 31, 31)?.icon;
};

const DescriptionRender = (props: tp2) => {
  const {data, index, opacityStyled, height} = props;
  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: width,
        height: height * 0.2,
        top: height / 1.8,
        paddingHorizontal: 20,
      }}>
      <SharedElement id={`des${data[index].description}`}>
        <Animated.Text
          style={[
            {
              fontFamily: 'DancingScript-Medium',
              fontWeight: 'bold',
              fontSize: 30,
              color: 'rgb(36, 1, 92)',
            },
            opacityStyled,
          ]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {data[index].description}
        </Animated.Text>
      </SharedElement>
    </Animated.View>
  );
};

export default CustomCarousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    position: 'relative',
  },
  foodsAndDetails: {
    width: width,
    // height: height,
    height: '100%',
  },
  imageContainer: {
    width: width * 0.95,
    height: width * 0.95,
    position: 'absolute',
    top: width * 0.2,
    right: -width * 0.5,
    borderRadius: width / 2,
    borderLeftColor: 'rgb(36, 1, 92)',
    borderLeftWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 4,
    // shadowColor: 'rgba(0,0,0,.7)',
    // shadowRadius: 10,
    // shadowOpacity: 1,
    // shadowOffset: {width: 0, height: 10},
  },
});
