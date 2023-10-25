import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CustomCarousel from '../customCarousel/customCarousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppBar from '../ParallaxEffectList/component/appbar';
import FoodCategory from './component/foodCategory';
// @ts-ignore
import Pizza1 from '../../../assets/images/customCarousel/pizza1.png';
// @ts-ignore
import Pizza2 from '../../../assets/images/customCarousel/pizza2.png';
// @ts-ignore
import Pizza3 from '../../../assets/images/customCarousel/pizza3.png';
// @ts-ignore
import Pizza4 from '../../../assets/images/customCarousel/pizza4.png';
// @ts-ignore
import chicken1 from '../../../assets/images/customCarousel/chicken1.png';
// @ts-ignore
import chicken2 from '../../../assets/images/customCarousel/chicken2.png';
// @ts-ignore
import chicken3 from '../../../assets/images/customCarousel/chicken3.png';
// @ts-ignore
import sea1 from '../../../assets/images/customCarousel/sea1.png';
// @ts-ignore
import sea2 from '../../../assets/images/customCarousel/sea2.png';
// @ts-ignore
import sea3 from '../../../assets/images/customCarousel/sea3.png';
// @ts-ignore
import stick1 from '../../../assets/images/customCarousel/stick1.jpg';
// @ts-ignore
import kebab1 from '../../../assets/images/customCarousel/kebab1.jpg';
// @ts-ignore
import kebab2 from '../../../assets/images/customCarousel/kebab2.jpg';
const {width, height} = Dimensions.get('screen');

type Props = {};

const data: {
  name: string;
  icon: string;
  foods: {
    image: ImageSourcePropType;
    title: string;
    option: {price: string; delivery: string; time: string};
    description: string;
  }[];
  defaultSelected: number;
}[] = [
  {
    name: 'pizza',
    icon: 'b',
    foods: [
      {
        // image:
        //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-291.jpg?w=1380&t=st=1696673233~exp=1696673833~hmac=4c83aa33b6811a1c4928c6d8fb086f4d39e1f37ba3b56d5bfadb9161f53a9786',
        image: Pizza1,
        title: 'chef Pizza',
        option: {price: '100', delivery: '1.2', time: '120'},
        description:
          'For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/mushroom-pizza-vegetarian-white-background-isolated-still-life-copy-space-top-view-flat-lay_639032-295.jpg?w=1380&t=st=1696673237~exp=1696673837~hmac=0da7a890a83fa47abe2d53b9139d8401ccc49a4323deb45c68093efeb3818a9b',
        image: Pizza2,
        title: 'margarita pizza',
        option: {price: '70', delivery: '0.5', time: '90'},
        description:
          'Pizza can be traced back to Naples, Italy in the middle ages. Although the origin of the word pizza is not clear, the Italians are credited with coining the term pizza. It is though that the word could have come from the Italian word point, pizziare, meaning to pinch or pluck, or a verb meaning to sting or to season. Who would have thought that pizza will soon be the favorite dish of many? I love pizza so much that I don’t think I can live without it.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=1380&t=st=1696673314~exp=1696673914~hmac=27b153ed545f4ac136bc7b57c122c67780329cd5a815b7a0e5b14c19db31afc4',
        image: Pizza3,
        title: 'vegetable pizza',

        option: {price: '40', delivery: '3', time: '60'},
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
    ],
    defaultSelected: 0,
  },
  {
    name: 'fried',
    icon: 'b',
    foods: [
      {
        // image:
        //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-291.jpg?w=1380&t=st=1696673233~exp=1696673833~hmac=4c83aa33b6811a1c4928c6d8fb086f4d39e1f37ba3b56d5bfadb9161f53a9786',
        image: chicken1,
        title: 'chicken fried one',
        option: {price: '100', delivery: '1.4', time: '120'},
        description:
          'For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/mushroom-pizza-vegetarian-white-background-isolated-still-life-copy-space-top-view-flat-lay_639032-295.jpg?w=1380&t=st=1696673237~exp=1696673837~hmac=0da7a890a83fa47abe2d53b9139d8401ccc49a4323deb45c68093efeb3818a9b',
        image: chicken2,
        title: 'chicken fried two',
        option: {price: '70', delivery: '0.2', time: '90'},
        description:
          'Pizza can be traced back to Naples, Italy in the middle ages. Although the origin of the word pizza is not clear, the Italians are credited with coining the term pizza. It is though that the word could have come from the Italian word point, pizziare, meaning to pinch or pluck, or a verb meaning to sting or to season. Who would have thought that pizza will soon be the favorite dish of many? I love pizza so much that I don’t think I can live without it.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=1380&t=st=1696673314~exp=1696673914~hmac=27b153ed545f4ac136bc7b57c122c67780329cd5a815b7a0e5b14c19db31afc4',
        image: chicken3,
        title: 'chicken fried three',

        option: {price: '40', delivery: '0', time: '60'},
        description:
          'Do you consider yourself to be a good cook? Or are you the type of person who finds cooking to be difficult? If not or even so, there is a quick and easy way to satisfy your own as well as your guest’s appetites. It involves making pizza from scratch- with the exception of using store bought or already prepared French bread. Many may be already wondering: why choose fresh pizza over frozen or restaurant pizzas? First of all it’s cheaper, second it’s healthier, third you know what’s on it, fourth it’s quicker compared to restaurants, but most importantly you can create them accordingly to your own preferences.There are only a few basic steps in making a pizza, but first of all it is important to know and discuss the advantages of doing it yourself.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?w=1380&t=st=1696672490~exp=1696673090~hmac=240f03bee445ffa052be906d715920683407fae2726a2f4b3895412d32eb9b02',
        image: chicken1,
        title: 'chicken fried four',
        option: {price: '10', delivery: '20', time: '30'},

        description:
          'When one says their favorite food is pizza, one might feel extremely cliché and basic. However, to me pizza is more than just food, it’s a small player in the attempt for world peace but nobody sees it that way. Personally I was introduced to pizza by my family at a young age because of my Italian background, but growing up, and after eating tons of slices of pizza I had a realization, that realization is that pizza is something almost everyone can agree on. Pizza gives me inspiration in life because of its unique variations and its worldwide acceptance in many countries and cultures. Whether it be homemade, ordered out, or dined in pizza is truly one of, if not the most inspiring to life in general. Pizza and its variations can mean a lot of things; including its shape, variable toppings and ways to make it. Ever notice that a pizza is round, in a square box, and cut into triangle slices',
      },
    ],
    defaultSelected: 0,
  },
  {
    name: 'sea',
    icon: 'b',
    foods: [
      {
        // image:
        //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-291.jpg?w=1380&t=st=1696673233~exp=1696673833~hmac=4c83aa33b6811a1c4928c6d8fb086f4d39e1f37ba3b56d5bfadb9161f53a9786',
        image: sea1,
        title: 'sea food 1',
        option: {price: '100', delivery: '0.8', time: '120'},
        description:
          'For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish. For millennia, pizza, a food of various origins and multiple styles, has played an important role in the diet of those who inhabited the land now called Italy. Neolithic nomads, the Etruscans from the North, and the Greeks from southern regions were the three earliest societies to develop pizza prototypes, for example, focaccia. Each group made small adaptations that changed the original product into a slightly more refined dish.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/mushroom-pizza-vegetarian-white-background-isolated-still-life-copy-space-top-view-flat-lay_639032-295.jpg?w=1380&t=st=1696673237~exp=1696673837~hmac=0da7a890a83fa47abe2d53b9139d8401ccc49a4323deb45c68093efeb3818a9b',
        image: sea2,
        title: 'sea food 2',
        option: {price: '70', delivery: '2', time: '90'},
        description:
          'Pizza can be traced back to Naples, Italy in the middle ages. Although the origin of the word pizza is not clear, the Italians are credited with coining the term pizza. It is though that the word could have come from the Italian word point, pizziare, meaning to pinch or pluck, or a verb meaning to sting or to season. Who would have thought that pizza will soon be the favorite dish of many? I love pizza so much that I don’t think I can live without it.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/thinly-sliced-pepperoni-is-popular-pizza-topping-american-style-pizzerias-isolated-white-background-still-life_639032-229.jpg?w=1380&t=st=1696673314~exp=1696673914~hmac=27b153ed545f4ac136bc7b57c122c67780329cd5a815b7a0e5b14c19db31afc4',
        image: sea3,
        title: 'sea food 3',

        option: {price: '40', delivery: '1.5', time: '60'},
        description:
          'Do you consider yourself to be a good cook? Or are you the type of person who finds cooking to be difficult? If not or even so, there is a quick and easy way to satisfy your own as well as your guest’s appetites. It involves making pizza from scratch- with the exception of using store bought or already prepared French bread. Many may be already wondering: why choose fresh pizza over frozen or restaurant pizzas? First of all it’s cheaper, second it’s healthier, third you know what’s on it, fourth it’s quicker compared to restaurants, but most importantly you can create them accordingly to your own preferences.There are only a few basic steps in making a pizza, but first of all it is important to know and discuss the advantages of doing it yourself.',
      },
      {
        // image:
        //   'https://img.freepik.com/free-photo/delicious-italian-pizza-with-tomato-olives-pepperoni-mushrooms-top-view-isolated-white-background-still-life-copy-space_639032-299.jpg?w=1380&t=st=1696672490~exp=1696673090~hmac=240f03bee445ffa052be906d715920683407fae2726a2f4b3895412d32eb9b02',
        image: sea3,
        title: 'sea food 4',
        option: {price: '10', delivery: '20', time: '30'},

        description:
          'When one says their favorite food is pizza, one might feel extremely cliché and basic. However, to me pizza is more than just food, it’s a small player in the attempt for world peace but nobody sees it that way. Personally I was introduced to pizza by my family at a young age because of my Italian background, but growing up, and after eating tons of slices of pizza I had a realization, that realization is that pizza is something almost everyone can agree on. Pizza gives me inspiration in life because of its unique variations and its worldwide acceptance in many countries and cultures. Whether it be homemade, ordered out, or dined in pizza is truly one of, if not the most inspiring to life in general. Pizza and its variations can mean a lot of things; including its shape, variable toppings and ways to make it. Ever notice that a pizza is round, in a square box, and cut into triangle slices',
      },
    ],
    defaultSelected: 0,
  },
  // {name: 'traditional', icon: 'b', foods: [], defaultSelected: 0},
  {name: 'Foreign', icon: 'b', foods: [], defaultSelected: 0},
  {name: 'sandwich', icon: 'b', foods: [], defaultSelected: 0},
  {name: 'Steak', icon: 'b', foods: [], defaultSelected: 0},
];
const FoodOrder = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const [selected, setSelected] = React.useState<{
    name: string;
    icon: string;
    foods: {
      image: ImageSourcePropType;
      title: string;
      option: {price: string; delivery: string; time: string};
      description: string;
    }[];
    defaultSelected: number;
  }>(data[selectedIndex]);

  const top = useSafeAreaInsets().top;
  const bottom = useSafeAreaInsets().bottom;
  const Height = height - (top + bottom);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={[styles.foodsContainer, {marginTop: Height * 0.15}]}>
          <CustomCarousel
            data={selected.foods}
            selected={selected.defaultSelected}
            selectedIndex={selectedIndex}
          />
        </View>
        <AppBar />
        <View style={[styles.foodCategoryContainer, {height: Height * 0.11}]}>
          <FoodCategory
            selected={selected}
            setSelected={setSelected}
            data={data}
            setSelectedIndex={setSelectedIndex}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  foodCategoryContainer: {
    width: width,
    height: height * 0.2,
    top: width * 0.15,
    position: 'absolute',
  },
  foodsContainer: {
    width: width,
    height: height,
    backgroundColor: 'red',
    position: 'relative',
  },
});
