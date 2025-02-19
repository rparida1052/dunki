import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const StockAlertCard = () => {
  return (
    <View className="flex-row items-center justify-between bg-[#F8E8D8] p-4 rounded-3xl shadow-md border border-[#E7C4A0] m-2">
      <Text className="text-gray-800 text-base flex-1 px-2">
        Potatoes are selling at 25% faster rate than other veggies, stock it
        more!
      </Text>
      <View className="flex-row  gap-2">
        <TouchableOpacity className="bg-[#F3D5B5] px-4 py-2 rounded-full">
          <Text className="text-[#C16736] font-semibold">Ignore</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#E87C41] px-4 py-2 rounded-full">
          <Text className="text-white font-semibold">Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StockAlertCard;
