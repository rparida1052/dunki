import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransparentButton from './TransparentButton';
import SquareButton from './SquareButton';
 interface Item {
   item: {
     name: string;
     address: string;
   };
 }
const PendingPaymentCard = (item:Item) => {
 
  return (
    <View className="border-primary border-2  mx-2 flex flex-row justify-between items-center rounded-xl my-2 max-h-28">
      <View className="flex-1 p-2">
        <Text className="text-xl font-semibold ">{item.item.name}</Text>
        <Text className="text-base font-semibold">
          {item.item.address}
        </Text>
      </View>
      <TransparentButton />
      <SquareButton />
    </View>
  );
}

export default PendingPaymentCard

