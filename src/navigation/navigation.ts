import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavStackParamList = {
    Home: undefined;
    Basket: undefined;
}

export type NavigationProps = NativeStackNavigationProp<NavStackParamList>;