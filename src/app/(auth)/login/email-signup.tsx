import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "@/src/components/InputText";
import Navbar from "@/src/components/Navbar";
import NextButton from "@/src/components/NextStepButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { supabase } from "@/src/lib/supabase";

const EmailSignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  async function signUpWithEmail() {
    setLoading(true);
    console.log("Calling from the signup function");
    const { error,data } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(data);

    if (error) Alert.alert(error.message);
    router.push("/")
    setLoading(false);
  }
  if(loading){
    return <View className="flex-1 items-center justify-center bg-[#FAF3E1] mx-2">
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  }
  return (
    <View className="flex-1 items-start  bg-[#FAF3E1] mx-2">
      <Navbar title="Fill out the details" />
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
      <NextButton
        title="Sign Up"
        onPress={signUpWithEmail}
        className="w-full mt-10"
      />
      <Pressable onPress={() => router.push("/(auth)/login/email-login")} className="mt-5 w-full">
        <Text className="text-center">Already have an account?sign in</Text>
      </Pressable>
    </View>
  );
};

export default EmailSignUpScreen;

