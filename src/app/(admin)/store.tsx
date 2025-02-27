import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ProductCard from "@/src/components/ProductCard";
import StockAlertCard from "@/src/components/StockAlertCard";
import { groceryAlerts, vegetableStock } from "@/src/constants/data";

const Store = () => {
  // Managing state for stock alerts
  const [stockAlerts, setStockAlerts] = useState(groceryAlerts);

  // Managing state for each vegetable quantity
  const [stock, setStock] = useState(
    vegetableStock.reduce(
      (acc, veg) => ({ ...acc, [veg.name]: veg.quantity }),
      {}
    )
  );

  // Function to update quantity
  const updateQuantity = (name: string, newQuantity: number) => {
    setStock((prevStock) => ({
      ...prevStock,
      [name]: newQuantity,
    }));
  };
  
  return (
    <ScrollView
      className="flex-1 bg-bg"
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }} // Added padding to prevent cutoff
    >
      {/* Header */}
      <View className="flex-row justify-between items-center m-4">
        <View className="flex-row items-center gap-4">
          <Text className="text-4xl font-bold">In Store</Text>
          <FontAwesome6 name="cart-shopping" size={26} color="black" />
        </View>
        <Pressable className="border-primary border p-2 rounded-full shadow-primary shadow-2xl">
          <Text className="text-primary">Add Categories</Text>
        </Pressable>
      </View>

      {/* Product Grid */}
      <FlatList
        data={vegetableStock}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            quantity={stock[item.name]}
            setQuantity={(newQuantity) =>
              updateQuantity(item.name, newQuantity)
            }
          />
        )}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 10,
        }}
        scrollEnabled={false} // Prevents nested scrolling issues
      />

      {/* Recommendation Section */}
      <View className="m-4">
        <Text className="text-4xl font-bold mb-2">Recommendation</Text>
        <FlatList
          data={stockAlerts}
          renderItem={({ item }) => <StockAlertCard message={item.message} />}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} // Ensures all items render properly inside ScrollView
        />
      </View>
    </ScrollView>
  );
};

export default Store;
