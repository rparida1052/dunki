import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NextButton from '@/src/components/NextStepButton'
import { useRouter } from 'expo-router'

const Profile = () => {
  const router = useRouter()
  const logout = async ()=>{
    router.replace("/(auth)/login/email-login")
  }
  return (
    <View className="flex-1 items-center  bg-bg">
      <Text className="text-3xl">Your Profile</Text>
      <View className='mt-40'>
        <NextButton onPress={logout} title="Logout" className="mt-30" />
      </View>
    </View>
  );
}

export default Profile

const styles = StyleSheet.create({})