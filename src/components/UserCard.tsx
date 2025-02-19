import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons"; // Icon library

const UserCard = () => {
  return (
    <TouchableOpacity className="flex-row items-center justify-between bg-[#6E8B74] p-4 rounded-lg m-4">
      {/* User Info */}
      <View>
        <Text className="text-white text-lg font-semibold">Swati Sethi</Text>
        <Text className="text-white text-sm opacity-80">₹200</Text>
      </View>

      {/* Arrow Icon */}
      <Feather name="chevron-right" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default UserCard;
