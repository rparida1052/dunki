import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

interface NavbarProps {
  isnotificationVisible?: boolean;
}

const Navbar = ({ isnotificationVisible = true }: NavbarProps) => {
  const router = useRouter();

  return (
    <View className="flex-row items-center bg-bg p-4 z w-full">
      {!isnotificationVisible && (
        <Pressable className="p-2" onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={28} color="orange" />
        </Pressable>
      )}
      {isnotificationVisible && (
        <TouchableOpacity className="p-2">
          <Image source={require("@/assets/images/ham-burger.png")} />
        </TouchableOpacity>
      )}
      <View className="flex-1 items-center">
        <Text
          className="text-primary font-bold text-[50px]"
          style={{ fontFamily: "santoshi" }}>
          Dunki
        </Text>
      </View>
      {isnotificationVisible && (
        <Pressable className="p-2" onPress={() => router.push("/notification")}>
          <Image source={require("@/assets/images/notification-icon.png")} />
        </Pressable>
      )}
    </View>
  );
};

export default Navbar;
