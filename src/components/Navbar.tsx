import { Pressable, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

interface NavbarProps {
  title: string;
}
const Navbar = ({ title }: NavbarProps) => {
  const router = useRouter();

  return (
    <View className="flex-row  bg-[#FAF3E1] m-4">
      <View className=" w-full mt-1 flex-row justify-start gap-10">
        <Pressable onPress={()=>router.back()}>
          <AntDesign name="arrowleft" size={28} color="black" />
        </Pressable>
        <Text className="text-3xl font-semibold text-center text-black ">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Navbar;
