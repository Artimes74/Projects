import React from 'react';
import Animated, {useAnimatedScrollHandler} from 'react-native-reanimated';
import {myListProps} from '../../../../utils/type/parallaxEffectList/parallaxEffectListType';
import {Dimensions, View} from 'react-native';
import Cards from './cards';

const {width, height} = Dimensions.get('screen');
const ITEM_CONTAINER = width * 0.8;

const MyList = (props: myListProps) => {
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
