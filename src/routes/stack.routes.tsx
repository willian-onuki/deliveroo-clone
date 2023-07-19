import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/route';
import { Home } from '../screens/Home';
import { Restaurant } from '../screens/Restaurant';
import { Basket } from '../screens/Basket';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name='Restaurant'
        component={Restaurant}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
