import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons"; // Icon library

interface UserCardProps {
  name: string;
  amount: string;
}
const UserCard = ({name,amount}: UserCardProps) => {
  return (
    <TouchableOpacity className="flex-row items-center justify-between bg-[#6E8B74] p-4 rounded-lg m-4">
      {/* User Info */}
      <View>
        <Text className="text-white text-lg font-semibold">
          {name}
        </Text>
        <Text className="text-white text-sm opacity-80">
          ₹{amount}
        </Text>
      </View>

      {/* Arrow Icon */}
      <Feather name="chevron-right" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default UserCard;
