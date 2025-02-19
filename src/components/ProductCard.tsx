import { Pressable, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import SquareButton from "./SquareButton";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

const ProductCard = () => {
  const [quantity, setQuantity] = useState(2.5);

  return (
    <View className="flex-row items-center justify-between bg-orange-100  rounded-2xl shadow-md border border-orange-200  max-h-28 m-4 min-w-6 p-2">
      {/* Left Section */}
      <View className="flex-col">
        <Text className="text-lg font-bold text-gray-800">Potato</Text>
        <View className="flex-row items-center space-x-3 mt-1">
          <Text className="text-gray-700 text-base">{quantity} kgs</Text>
          <Pressable
            onPress={() => setQuantity((prev) => Math.max(prev - 0.5, 0))}
            className="bg-gray-300 w-7 h-7 flex items-center justify-center rounded-full"
          >
            <Text className="text-gray-800 font-bold">-</Text>
          </Pressable>
          <Pressable
            onPress={() => setQuantity((prev) => prev + 0.5)}
            className="bg-gray-300 w-7 h-7 flex items-center justify-center rounded-full"
          >
            <Text className="text-gray-800 font-bold">+</Text>
          </Pressable>
        </View>
      </View>

      {/* Update Button */}
        <SquareButton className="rounded-xl"/>
    </View>
  );
};

export default ProductCard;
