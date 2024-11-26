import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',

  contentStyle: {
    backgroundColor: '#fff',
  },
};

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: '#fff',
    // paddingHorizontal: normalize('horizontal', padding),
  },
};

export const modalStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  presentation: 'transparentModal',
  animation: 'fade_from_bottom',

  contentStyle: {
    backgroundColor: '#fff',
  },
};

interface ISearchScreenOptions extends NativeStackNavigationOptions {
  items?: string | null;
}

export const searchScreenOptions: ISearchScreenOptions = {
  ...defaultScreenOptions,
  presentation: 'formSheet',
  headerTitle: 'Search Product',
  headerShown: true,
  headerLargeTitle: true,
  headerSearchBarOptions: {
    hideWhenScrolling: false,
    inputType: 'text',
    autoFocus: true,
    onChangeText(e) {
      const text = e.nativeEvent.text;
      console.log(text);
    },
  },
};
