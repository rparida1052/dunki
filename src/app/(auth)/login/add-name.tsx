import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/src/components/InputText';
import Navbar from '@/src/components/Navbar';
import NextButton from '@/src/components/NextStepButton';
import { useRouter } from 'expo-router';

const AddNameScreen = () => {
   const router = useRouter();
   const [name, setName] = useState("");
   const [phoneNo, setPhoneNo] = useState("");
  
   return (
     <View className="flex-1 items-start  bg-[#FAF3E1] mx-2">
       <Navbar title="Fill out the details" />
       <Text className="text-2xl w-full text-center font-semibold mt-10 mb-10">
         Add details here
       </Text>
       <CustomInput
         label="Your Name"
         value={name}
         onChangeText={setName}
         className="w-full p-2"
       />
       <CustomInput
         label="Phone No"
         value={phoneNo}
         onChangeText={setPhoneNo}
         className="w-full p-2"
       />
       <NextButton
         title="Sign Up"
         onPress={() =>router.push("/(auth)/login/add-shop")}
         className="w-full mt-10"
       />
     </View>
   );
}

export default AddNameScreen;

