import {ImageSourcePropType} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

export type myListProps = {
  data: {
    id: number;
    image: ImageSourcePropType | SharedValue<ImageSourcePropType>;
    ref: React.RefObject<any>;
    name: string;
    description: string;
    color: string;
  }[];
  translateX: SharedValue<number>;
};

export type cardsProps = {
  item: {
    id: number;
    image: ImageSourcePropType | SharedValue<ImageSourcePropType>;
    ref: React.RefObject<any>;
    name: string;
    description: string;
    color: string;
  };
  index: number;
  translateX: SharedValue<number>;
};

export type appBarProps = {};

export type iconProps = {
  width: number;
  height: number;
  color?: string;
};
