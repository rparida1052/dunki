import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

interface NavbarProps {
  title: string;
}
const Navbar = ({ title }: NavbarProps) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between bg-bg p-4 z w-full mt-2">
      <TouchableOpacity className="p-2">
        <Image source={require("@/assets/images/ham-burger.png")} />
      </TouchableOpacity>
      {/* <Image source={require("@/assets/images/dunki-logo.png")} /> */}
      <Text className="text-primary font-bold text-[50px]">Dunki</Text>
      <TouchableOpacity className="p-2">
        <Image source={require("@/assets/images/notification-icon.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
