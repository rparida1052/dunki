import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import OrderItem from "@/src/components/OrderItem";
import CustomInput from "@/src/components/InputText";

const OrderDetails = () => {
    const [note, setNote] = useState("")
  return (
    <View className="bg-bg flex-1">
      <ScrollView>
        {/* User Details */}
        <View className="m-4">
          <Text className="text-4xl font-semibold">Rahul Parida</Text>
          <Text>203, Jyotish Nagar, Kazi Bazar, Cuttack</Text>
        </View>

        {/* Order Table */}
        <View className="m-4 border border-orange-400 rounded-lg overflow-hidden">
          {/* Table Header */}
          <View className="flex flex-row bg-orange-600 p-3">
            <Text className="text-white font-bold text-center w-1/12">#</Text>
            <Text className="text-white font-bold text-left w-4/12">Name</Text>
            <Text className="text-white font-bold text-center w-3/12">
              Quantity
            </Text>
            <Text className="text-white font-bold text-center w-3/12">
              Price
            </Text>
          </View>

          {/* Table Data */}
          <View className="flex-1">
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <OrderItem index={index} item={item} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>

        {/* Pickup Time Section */}
        <View className="m-4 bg-primary p-3 rounded-lg">
          <Text className="text-white text-lg font-semibold">
            Pickup Time: 5.30 PM
          </Text>
        </View>

        {/* Pickup Note Section */}
        <View className="mb-40 m-4">
          <Text className="text-lg font-medium">Add a pickup note</Text>
          <CustomInput
            label="Pickup Note"
            placeholder="Add a note"
            value={note}
            onChangeText={setNote}
            className="mt-2"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

export const data = [
  {
    id: 1,
    name: "potato",
    quantity: 2,
    quantityType: "kg",
    price: 100,
  },
  {
    id: 2,
    name: "onion",
    quantity: 1,
    quantityType: "kg",
    price: 50,
  },
  {
    id: 3,
    name: "tomato",
    quantity: 1,
    quantityType: "kg",
    price: 60,
  },
  {
    id: 4,
    name: "brinjal",
    quantity: 1,
    quantityType: "kg",
    price: 40,
  },
  {
    id: 5,
    name: "cabbage",
    quantity: 1,
    quantityType: "kg",
    price: 30,
  },
  {
    id: 6,
    name: "cauliflower",
    quantity: 1,
    quantityType: "kg",
    price: 40,
  },
  {
    id: 7,
    name: "capsicum",
    quantity: 1,
    quantityType: "kg",
    price: 50,
  },
  {
    id: 8,
    name: "carrot",
    quantity: 1,
    quantityType: "kg",
    price: 40,
  },
  {
    id: 9,
    name: "beetroot",
    quantity: 1,
    quantityType: "kg",
    price: 50,
  },
  {
    id: 10,
    name: "bitter gourd",
    quantity: 1,
    quantityType: "kg",
    price: 40,
  },
  {
    id: 11,
    name: "bottle gourd",
    quantity: 1,
    quantityType: "kg",
    price: 30,
  },
  {
    id: 12,
    name: "cucumber",
    quantity: 1,
    quantityType: "kg",
    price: 20,
  },
  {
    id: 13,
    name: "green chilli",
    quantity: 1,
    quantityType: "kg",
    price: 40,
  },
  {
    id: 14,
    name: "lady finger",
    quantity: 1,
    quantityType: "kg",
    price: 50,
  },
  {
    id: 15,
    name: "lemon",
    quantity: 1,
    quantityType: "kg",
    price: 60,
  },
];
