import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";

import OrderCard from "@/src/components/OrderCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import axios from "axios";
import BACKEND_URL from "@/src/constants/url";
import * as SecureStore from "expo-secure-store";
import PendingPaymentCard from "@/src/components/PendingPaymentCard";
const Index = () => {
  const [name, setName] = useState("");
  const [OtpInput, setOtpInput] = useState("");
  const [Orders, setOrders] = useState<any[] | null>(null);
  const [token,setToken] = useState<string | null>("");
  const getData = async ()=>{
      console.log("backend url", `${BACKEND_URL}/orders/today`);
    try{
      const response = await axios.get(`${BACKEND_URL}/orders/today`);
      console.log("Orders",response.data)
      setOrders(response.data)
    }catch(error){
      console.log(error)
    }
  }
  const getToken = async () => {
    const token = await SecureStore.getItemAsync("token");
    console.log("Token", token);
    setToken(token);
  }
  
  useEffect(()=>{
    getData();
    getToken();
  },[])
  return (
    <View className="bg-bg flex-1 p-4 mb-10">
      {/* Orders For Today */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-4xl font-semibold">Orders For Today</Text>
        <Pressable onPress={()=>{}}>
          <FontAwesome6 name="clock-rotate-left" size={24} color="black" />
        </Pressable>
        <Feather name="filter" size={24} color="orange" />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({ item }) => <OrderCard />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Pending Payments */}
      <View className="flex flex-row justify-start gap-10 items-center mt-4 mb-4">
        <Text className="text-4xl font-semibold">Pending Payments</Text>
        <FontAwesome6 name="clock-rotate-left" size={24} color="black" />
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
        renderItem={({ item }) => <PendingPaymentCard />}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Index;
