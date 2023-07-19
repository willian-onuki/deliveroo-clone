import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

export function BasketIcon() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'
      >
        <Text className='text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>
          {items.length}
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>
          View Basket
        </Text>
        <Text className='text-white text-lg font-extrabold'>
          {basketTotal.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
