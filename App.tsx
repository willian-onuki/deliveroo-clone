import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import { AppRoutes } from './src/routes';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
