import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/src/components/InputText';
import Navbar from '@/src/components/Navbar';
import NextButton from '@/src/components/NextStepButton';
import { useRouter } from 'expo-router';
import OTPInput from '@/src/components/OtpInput';

const VerifyOtpScreen = () => {
   const router = useRouter()
    const [otp, setOtp] = useState("");
   
  return (
    <View className="flex-1 items-start  bg-[#FAF3E1] mx-2">
      <Navbar title="Verify the OTP" />
      <View className="w-full mb-10">
        <Text className="text-lg w-full text-start  mt-10 text-wrap">
          An OTP will be sent to this email in your messaging. this will be
          valid only for 5 minutes, do enter the OTP If by mistake you entered
          the wrong phone number,
        </Text>
        <Pressable onPress={()=>router.back()}>
          <Text className='underline font-bold text-lg'>do change it</Text>
        </Pressable>
      </View>
      <OTPInput
        length={6}
        onChangeText={setOtp}
        onComplete={() => {}}
        value={otp}
      />
      <NextButton title="Sign Up" onPress={() => router.push("/(auth)/login/add-name")} className="w-full mt-10" />
    </View>
  );
}

export default VerifyOtpScreen;

const styles = StyleSheet.create({})