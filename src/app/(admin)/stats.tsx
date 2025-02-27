import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FinanceCard from '@/src/components/FinanceCard'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import UserCard from '@/src/components/UserCard';
import { FlatList } from 'react-native';
import { transactions } from '@/src/constants/data';
const Stats = () => {
  return (
    <ScrollView className="bg-bg flex-1">
      <View className=" flex-1 bg-bg ">
        <FinanceCard />
        <View className="mt-4">
          <View className="flex-row gap-4 m-2 ">
            <Text className="text-3xl font-semibold  ">Sales Progress</Text>
            <MaterialCommunityIcons
              name="cart-arrow-up"
              size={30}
              color="black"
            />
          </View>
        </View>
        <View className="m-2">
          <Text>Monthly</Text>
          <Image
            source={require("@/assets/images/chart.png")}
            className="w-full"
          />
        </View>
        <View className="m-2 flexcol  items-start">
          <Text className="text-start">
            Analysing the current trend, and past sales...
          </Text>
          <Image
            source={require("@/assets/images/pie-chart.png")}
            className=""
          />
        </View>
        <View>
          <View className="flex-row gap-4 m-2">
            <Text>Transaction Details</Text>
            <MaterialIcons name="monetization-on" size={24} color="black" />
          </View>
          <View className='mb-20'>
            <FlatList
            data={transactions}
            renderItem={(item)=><UserCard name={item.item.name} amount={item.item.amount.toString()}/>}
            keyExtractor={(item)=>item.id.toString()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Stats

