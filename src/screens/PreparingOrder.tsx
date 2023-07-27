import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

export function PreparingOrder() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 5000)
  }, [])

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.View
        animation='slideInUp'
        iterationCount={1}
        className='h-64 w-64 rounded-full overflow-hidden bg-white flex items-center justify-center'
      >
        <Image
          source={require('../../assets/preparingOrder2.gif')}
          className='w-full h-[300px]'
        />
      </Animatable.View>
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='my-10 text-lg text-white font-bold text-center'
      >
        Waiting for Restaurant tp accept your order!
      </Animatable.Text>

      <Progress.Circle
        size={60}
        indeterminate
        color="white"
      />

    </SafeAreaView>
  );
}
