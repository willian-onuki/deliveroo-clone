import 'react-native-url-polyfill/auto';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Navigator>
      <Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
        />
    </Navigator>
        </NavigationContainer>
  );
}
