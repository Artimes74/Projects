import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('screen');

type Props = {
  data: {
    name: string;
    icon: string;
    foods: {
      image: ImageSourcePropType;
      title: string;
      option: {price: string; delivery: string; time: string};
      description: string;
    }[];
    defaultSelected: number;
  }[];
  selected: {
    name: string;
    icon: string;
    foods: {
      image: ImageSourcePropType;
      title: string;
      option: {price: string; delivery: string; time: string};
      description: string;
    }[];
    defaultSelected: number;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
      icon: string;
      foods: {
        image: ImageSourcePropType;
        title: string;
        option: {price: string; delivery: string; time: string};
        description: string;
      }[];
      defaultSelected: number;
    }>
  >;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

const FoodCategory = (props: Props) => {
  const {data, selected, setSelected, setSelectedIndex} = props;

  const onPressHandler = (item: {
    name: string;
    icon: string;
    foods: {
      image: ImageSourcePropType;
      title: string;
      option: {price: string; delivery: string; time: string};
      description: string;
    }[];
    defaultSelected: number;
  }) => {
    setSelected(item);
    setSelectedIndex(-1);
    setSelectedIndex(0);
    console.log('asdas');
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => onPressHandler(item)}
              style={[
                styles.categoryItem,
                {
                  marginRight: index === data.length - 1 ? 20 : 0,
                  backgroundColor:
                    selected.name === item.name
                      ? 'rgba(36, 1, 92,1)'
                      : 'transparent',
                },
              ]}
              key={index}>
              <Text
                style={{
                  fontFamily: 'DancingScript-Medium',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color:
                    selected.name === item.name ? 'white' : 'rgba(36, 1, 92,1)',
                }}>
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default FoodCategory;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  categoryItem: {
    width: width * 0.22,
    height: width * 0.1,
    marginLeft: 20,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(36, 1, 92,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
