import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Dish } from '../../typings';
import { useState } from 'react';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsById } from '../features/basketSlice';
import { RootState } from '../../store';
import { Image as Image_2 } from 'sanity';
import { urlFor } from '../../sanity';


interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
  image: Image_2;
}

export function DishRow({ id, name, description, price, image }: Props) {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state: RootState) => selectBasketItemsById(state, id), shallowEqual);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({
      _id: id,
      name,
      description,
      price,
      image
    }));
  }

  const removeItemFromBasket = () => {
    if (items.length <= 0) return
    dispatch(
      removeFromBasket({_id: id})
    );
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>
            <Text className='text-gray-400 mt-2'>{price}</Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{ uri: urlFor(image).url() }}
              className='h-20 w-20 bg-gray-300 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                color={!items.length ? 'gray' : '#00CCBB'}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity
              onPress={addItemToBasket}
            >
              <PlusCircleIcon
                color='#00CCBB'
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
