import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { RestaurantCard } from './RestaurantCard';
import { useEffect } from 'react';
import { Restaurant } from '../../typings';
import { urlFor } from '../../sanity';

interface Props {
  id: string;
  title: string;
  description: string;
  restaurants: Restaurant[];
}

export function FeaturedRow({ id, title, description, restaurants }: Props) {


  return (
    <View>
      <View className='flex-row items-center justify-between mt-4 px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {
          restaurants?.map((restaurant) => (
            <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imageUrl={String(urlFor(restaurant.image))}
            name={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            />
            ))
          }
      </ScrollView>
    </View>
  );
}
