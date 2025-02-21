import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/src/components/InputText";
import Navbar from "@/src/components/Navbar";
import NextButton from "@/src/components/NextStepButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { supabase } from "@/src/lib/supabase";
import axios from "axios";
import BACKEND_URL from "@/src/constants/url";
import * as SecureStore from "expo-secure-store";

const EmailLoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function signInWithEmail() {
    console.log("backedn url", `${BACKEND_URL}/login`);
    try {
      setLoading(true);
      const resoponse = await axios.post(
        `${BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );
      
      console.log(resoponse.data)
      if(resoponse){
       await SecureStore.setItemAsync("token", resoponse.data.token);
        Alert.alert("Success", "You have successfully logged in");
      }
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <View className="flex-1 items-start  bg-[#FAF3E1] mx-2">
      <Navbar title="Fill out the details" />
      <Text className="text-2xl w-full text-center font-semibold mt-10 mb-10">
        Sign in to your exsting account
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
      <NextButton
        title="Sign In"
        onPress={signInWithEmail}
        className="w-full mt-10"
      />
      <Pressable
        onPress={() => router.push("/(auth)/login/email-signup")}
        className="mt-5 w-full">
        <Text className="text-center">Don't have an account?signup</Text>
      </Pressable>
    </View>
  );
};

export default EmailLoginScreen;
