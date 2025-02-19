import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const FinanceCard = () => {
  return (
    <LinearGradient
      colors={["#232323", "#1a1a1a"]} // Dark gradient background
      className="p-6 rounded-2xl  shadow-lg relative overflow-hidden m-2"
      style={{ position: "relative" }}
    >
      {/* Orange Glow Effects */}
      <View
        className="absolute w-24 h-24 bg-orange-500 opacity-30 rounded-full"
        style={{ top: -10, left: -10 }}
      />
      <View
        className="absolute w-24 h-24 bg-orange-500 opacity-30 rounded-full"
        style={{ bottom: -10, right: -10 }}
      />

      {/* Net Balance Section */}
      <Text className="text-gray-300 text-sm">Net Balance</Text>
      <Text className="text-white text-3xl font-bold">₹15,020</Text>

      {/* Stats Grid */}
      <View className="mt-4 flex-row flex-wrap justify-between">
        {/* Left Column */}
        <View className="w-1/2 pr-2">
          <Text className="text-gray-400 text-sm">
            Amount Earned this month:
          </Text>
          <Text className="text-white text-lg font-semibold">₹35,000</Text>
        </View>

        <View className="w-1/2 pl-2">
          <Text className="text-gray-400 text-sm">Loan cleared this month</Text>
          <Text className="text-white text-lg font-semibold">₹10,000</Text>
        </View>

        {/* Bottom Row */}
        <View className="w-1/2 pr-2 mt-2">
          <Text className="text-gray-400 text-sm">Loan pending</Text>
          <Text className="text-white text-lg font-semibold">₹100,000</Text>
        </View>

        <View className="w-1/2 pl-2 mt-2">
          <Text className="text-gray-400 text-sm">Profit Earned</Text>
          <Text className="text-white text-lg font-semibold">₹25,000</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default FinanceCard;
