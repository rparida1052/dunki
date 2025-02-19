import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ProductCard from "@/src/components/ProductCard";
import StockAlertCard from "@/src/components/StockAlertCard";

const Store = () => {
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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={() => <ProductCard />}
        keyExtractor={(item) => item.toString()}
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
          data={[1, 2, 3, 4, 5]}
          renderItem={() => <StockAlertCard />}
          keyExtractor={(item) => item.toString()}
          scrollEnabled={false} // Ensures all items render properly inside ScrollView
        />
      </View>
    </ScrollView>
  );
};

export default Store;

const styles = StyleSheet.create({});
