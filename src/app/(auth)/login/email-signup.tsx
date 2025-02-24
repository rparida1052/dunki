import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/src/components/InputText";
import Navbar from "@/src/components/Navbar";
import NextButton from "@/src/components/NextStepButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import axios from "axios";
import BACKEND_URL from "@/src/constants/url";

const EmailSignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNo] = useState("");
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false);
  async function signUpWithEmail() {
    setLoading(true);
    console.log("Calling from the signup function");
    if(!email || !password || !phoneNumber || !address){
      Alert.alert("Please fill all the fields")
      setLoading(false);
      return;
    }
    const data = {
      name,
      email,
      password,
      address,
      phoneNumber,
    };
    try {
      const response = await axios.post(`${BACKEND_URL}/signup/Shopkeeper`, {
        name,
        email,
        password,
        address,
        phoneNumber,
      });
      console.log(response.data);
      router.push("/");
      
    } catch (error:any) {
      console.log("Error",error);
      Alert.alert("Error",error.message)
      
    }finally{
      setLoading(false);
    }
  }
  if(loading){
    return <View className="flex-1 items-center justify-center bg-[#FAF3E1] mx-2 h-full w-full">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  }
  return (
    <ScrollView className="flex-1 bg-[#FAF3E1] mx-2">
      <View className="flex-1 items-start  bg-[#FAF3E1] mx-2">
        <Navbar isnotificationVisible={false} />
        <Text className="text-2xl w-full text-center font-semibold mt-10 mb-10">
          Sign Up to create new account
        </Text>
        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          className="w-full p-2"
        />
        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          className="w-full p-2"
        />
        <CustomInput
          label="Name"
          value={name}
          onChangeText={setName}
          className="w-full p-2"
        />
        <CustomInput
          label="PhoneNo"
          value={phoneNumber}
          onChangeText={setPhoneNo}
          className="w-full p-2"
        />
        <CustomInput
          label="Address"
          value={address}
          onChangeText={setAddress}
          className="w-full p-2"
        />
        <NextButton
          title="Sign Up"
          onPress={signUpWithEmail}
          className="w-full mt-10"
        />
        <Pressable
          onPress={() => router.push("/(auth)/login/email-login")}
          className="mt-5 w-full">
          <Text className="text-center">Already have an account?sign in</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default EmailSignUpScreen;

