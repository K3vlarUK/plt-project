import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Basket from './src/screens/Basket';
import Header from './src/components/header/Header';
import { Provider, createStoreHook } from 'react-redux';
import reducer from './src/redux/basket/reducer';
import { createStore } from 'redux';

export default function App() {

  const Stack = createNativeStackNavigator();
  // This should/could have been written using redux toolkit, but for simplicity its been chucked together with the deprecated fn
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{header: () => <Header />}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Basket" component={Basket}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
