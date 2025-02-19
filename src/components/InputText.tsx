import React from "react";
import { TextInput, View, Text } from "react-native";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  className?: string;
}

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  className = "",
}: CustomInputProps) => {
  return (
    <View className={`w-full ${className}`}>
      {label && (
        <Text className="text-black font-semibold mb-1 ml-2 text-xl">{label}</Text>
      )}
      <View className="border-2 border-[#C9BA94] bg-[#F5E7C6] rounded-xl p-1">
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="bg-cream-100 rounded-full px-4 py-2 text-black font-bold text-xl"
          placeholderTextColor="#A9A9A9"
        />
      </View>
    </View>
  );
};

export default CustomInput;
