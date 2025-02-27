import { Pressable, Text, View } from "react-native";
import React from "react";
import SquareButton from "./SquareButton";

interface ProductCardProps {
  name: string;
  quantity: number;
  setQuantity: (value: number) => void;
}

const ProductCard = ({ name, quantity, setQuantity }: ProductCardProps) => {
  return (
    <View className="flex-row items-center justify-between bg-orange-100 rounded-2xl shadow-md border border-orange-200 max-h-28 m-4 min-w-6 p-2 flex-1">
      {/* Left Section */}
      <View className="flex-col ">
        <Text className="text-lg font-bold text-gray-800">{name}</Text>
        <View className="flex-row items-center space-x-3 mt-1">
          <Text className="text-gray-700 text-base">{quantity} kgs</Text>
          <Pressable
            onPress={() => setQuantity(Math.max(quantity - 0.5, 0))}
            className="bg-gray-300 w-7 h-7 flex items-center justify-center rounded-full mx-2">
            <Text className="text-gray-800 font-bold">-</Text>
          </Pressable>
          <Pressable
            onPress={() => setQuantity(quantity + 0.5)}
            className="bg-gray-300 w-7 h-7 flex items-center justify-center rounded-full mx-2">
            <Text className="text-gray-800 font-bold">+</Text>
          </Pressable>
        </View>
      </View>

      {/* Update Button */}
      
    </View>
  );
};

export default ProductCard;
