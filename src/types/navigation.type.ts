import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
    [Routes.test]: undefined;
    [Routes.register]: undefined;
    [Routes.home]: undefined;
    [Routes.welcome]: undefined;
};
