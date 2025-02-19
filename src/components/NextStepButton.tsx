import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface NextButtonProps {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?:string;
  textClass?:string;
}

const NextButton = ({
  onPress,
  title = "Next",
  icon,
  iconPosition = "right",
  className,
  textClass,
}: NextButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-orange-500 rounded-full px-6 py-3 flex-row items-center justify-center shadow-lg active:opacity-80 ${className}`}
      onPress={onPress}
    >
      {icon && iconPosition === "left" && (
        <View className="absolute left-4">{icon}</View>
      )}
      <Text className={`text-white font-semibold text-lg ${textClass}`}>{title}</Text>
      {icon && iconPosition === "right" && (
        <View className="absolute right-4">{icon}</View>
      )}
    </TouchableOpacity>
  );
};

export default NextButton;
