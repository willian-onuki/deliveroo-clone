import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";
import { useMemo, useState } from "react";
import { Dish } from "../../typings";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";

interface GroupedItemsInBasket {
  [key: string]: Dish[];
}

export function Basket() {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  const deliveryPrice = 5.99;

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<GroupedItemsInBasket>({} as GroupedItemsInBasket);

  useMemo(() => {
    const groupedItems = items.reduce((acc, item) => {
      (acc[item._id] = acc[item._id] || []).push(item);
      return acc;
    }, {} as GroupedItemsInBasket)
    setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs '>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant.name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircleIcon
              color='#00CCBB'
              height={50}
              width={50}
            />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className='h-7 w-9 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00CCBB]'>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className='flex-row items-center space-x-3 bg-white py-2 px-5'
            >
              <Text>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{items[0]?.name}</Text>
              <Text>
                {items[0].price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ _id: key }))}
              >
                <Text className='text-[#00CCBB] text-xs'>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
              {basketTotal.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              {deliveryPrice.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className='font-extrabold'>
              {(basketTotal + deliveryPrice).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </View>
        <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4">
          <Text className="text-center text-white text-lg font-bold">Place Order</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
