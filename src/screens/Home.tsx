import { Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
 } from 'react-native-heroicons/outline'

export function Home() {
  return (
    <SafeAreaView className='bg-white pt-5'>
      <StatusBar />
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <View className='flex-row items-center'>
            <Text className='font-bold text-xl'>Current Location</Text>
            <ChevronDownIcon
              size={20}
              color='#00CCBB'
            />
          </View>
        </View>

        <UserIcon
          size={35}
          color='#00CCBB'
        />
      </View>

      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row space-x-2 bg-gray-200 p-3 flex-1 items-center rounded-md'>
          <MagnifyingGlassIcon size={20} color='gray' />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color='#00CCBB' />
      </View>

      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
}
