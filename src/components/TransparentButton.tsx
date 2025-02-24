import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

interface SquareButtonProps {
  onPress?: () => void;
  className?: string;
}
const TransparentButton = ({ onPress, className }: SquareButtonProps) => {
  const router = useRouter();
  return (
    <Pressable
      className={`min-w-24 max-w-28 bg-[#F5E7C6] h-full items-center justify-center p-1 ${className}`}
      onPress={() => router.push("/(admin)/(home)/order-details")}>
      <View>
        <Text className="break-words text-primary text-base font-bold">
          Mark as Paid
        </Text>
      </View>
    </Pressable>
  );
};

export default TransparentButton;

