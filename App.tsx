import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar} from 'react-native';
import { Route } from './src/Routes';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor='#d9edff' />
      <Route />
    </NavigationContainer>
  );
}

