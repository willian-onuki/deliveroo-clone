import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/route';
import { Home } from '../screens/Home';
import { Restaurant } from '../screens/Restaurant';
import { Basket } from '../screens/Basket';
import { PreparingOrder } from '../screens/PreparingOrder';
import { Delivery } from '../screens/Delivery';

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
      <Screen
        name='Basket'
        component={Basket}
        options={{ headerShown: false, presentation: 'modal' }}
      />
      <Screen
        name='PreparingOrder'
        component={PreparingOrder}
        options={{ headerShown: false }}
      />
      <Screen
        name='Delivery'
        component={Delivery}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
