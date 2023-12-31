import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Cards from './cards';
import Animated, {useAnimatedScrollHandler} from 'react-native-reanimated';

const {width, height} = Dimensions.get('screen');
const ITEM_CONTAINER = width * 0.85;

const MyList = props => {
  const {data, translateX} = props;

  const onScrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View style={{width: width, height: '100%'}}>
      <Animated.ScrollView
        horizontal
        style={{flex: 1}}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        snapToInterval={ITEM_CONTAINER}
        showsHorizontalScrollIndicator={false}>
        {data.map((image, index) => {
          return (
            <Cards
              item={image}
              index={index}
              key={index}
              translateX={translateX}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default MyList;

const styles = StyleSheet.create({});
