import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import AppBar from './component/appbar';
import MyList from './component/myList';

const {width, height} = Dimensions.get('screen');

const ParallaxEffectList = () => {
  const translateX = useSharedValue(0);
  const [data] = React.useState<
    {
      id: number;
      image: string;
      ref: React.RefObject<any>;
      name: string;
      description: string;
      color: string;
    }[]
  >([
    {
      id: 0,
      image: `https://images.pexels.com/photos/2607113/pexels-photo-2607113.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&dpr=2`,
      name: 'Beach',
      description: 'beach vibes, sunbathing, shine, relax',
      color: 'green',
      ref: React.createRef(),
    },
    {
      id: 1,
      image: `https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&dpr=2`,
      name: 'Hotel',
      description: 'travel, tourist, residence, relax, holiday,',
      color: 'orange',
      ref: React.createRef(),
    },
    {
      id: 2,
      image: `https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&dpr=2`,
      name: 'Island',
      color: 'lightblue',
      description: 'waves, sun, boat, sunbathing, palm ',

      ref: React.createRef(),
    },
    {
      id: 3,
      image: `https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
      name: 'Ski',
      color: 'black',
      description: 'sport, snow, entertainment, ski board, athlete',
      ref: React.createRef(),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <AppBar />
        <MyList translateX={translateX} data={data} />
      </View>
    </SafeAreaView>
  );
};

export default ParallaxEffectList;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    height: '100%',
  },
});
