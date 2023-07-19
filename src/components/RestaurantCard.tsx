import { Image, Text, TouchableOpacity, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { Dish } from '../../typings';
import { useNavigation } from '@react-navigation/native';


export interface RestaurantCardProps {
  id: string;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Dish[];
  long: number;
  lat: number;
}

export function RestaurantCard({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: RestaurantCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurant', {
          id,
          imageUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      className='bg-white mr-3 shadow-sm'
    >
      <Image
        source={{ uri: imageUrl }}
        className='h-36 w-64 rounded-sm'
      />
      <View className='px-3 pb-4 '>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
          <StarIcon
            color='green'
            opacity={0.5}
            size={22}
          />
          <Text className='text-sm text-gray-500'>
            <Text className='text-green-600/80'>{rating}</Text> · {genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon
            color='gray'
            opacity={0.4}
            size={22}
          />
          <Text className='text-gray-500 text-xs'>Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
