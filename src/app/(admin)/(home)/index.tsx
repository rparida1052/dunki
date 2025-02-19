import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import SquareButton from "@/src/components/SquareButton";
import OrderCard from "@/src/components/OrderCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { supabase } from "@/src/lib/supabase";

const Index = () => {
  const [name, setName] = useState("");
  const [OtpInput, setOtpInput] = useState("");
  const [Orders, setOrders] = useState<any[] | null>(null);
  const getData = async ()=>{
    try{
      const response = await supabase.from("order").select(`*,address(*)`);
      console.log("orders for today",response.data)
      if(response.error){
        Alert.alert("Error",response.error.message)
      }
      setOrders(response.data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <View className="bg-bg flex-1 p-4">
      {/* Orders For Today */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-4xl font-semibold">Orders For Today</Text>
        <Feather name="filter" size={24} color="orange" />
      </View>
      <FlatList
        data={Orders}
        renderItem={({ item }) => <OrderCard />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Pending Payments */}
      <View className="flex flex-row justify-start gap-10 items-center mt-4 mb-4">
        <Text className="text-4xl font-semibold">Pending Payments</Text>
        <FontAwesome6 name="clock-rotate-left" size={24} color="black" />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({ item }) => <OrderCard />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Index;
