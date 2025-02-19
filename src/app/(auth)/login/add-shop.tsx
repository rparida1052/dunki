import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/src/components/InputText";
import Navbar from "@/src/components/Navbar";
import NextButton from "@/src/components/NextStepButton";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const AddShopDetailsScreen = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  return (
    <View className="flex-1 items-start  bg-[#FAF3E1] mx-2">
      <Navbar title="Home Sweet Home" />
      <View>
        <Text className="text-xl font-semibold">Our app is now all yours!</Text>
        <Text className="text-xl font-semibold">
          For the last step, enter a name for your show that will be saved with
          us, for ordering purposes!
        </Text>
      </View>
      <CustomInput
        label="Shop Name"
        value={name}
        onChangeText={setName}
        className="w-full p-2"
      />
      <View className=" w-full flex flex-row items-center justify-center mt-20">
        <Image
          source={require("@/assets/images/shop-icon.png")}
          className="mt-20"
        />
      </View>
      <NextButton
        title="Sign Up"
        onPress={() => router.push("/(auth)/login/add-shop")}
        className=" mt-10 w-40 flex justify-center items-center absolute bottom-20 right-10"
        icon={<AntDesign name="arrowright" size={24} color="white" />}
      />
    </View>
  );
};

export default AddShopDetailsScreen;
