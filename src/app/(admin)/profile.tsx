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
    <View>
      <Text>Profile</Text>
      <NextButton onPress={logout} title='Logout'/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})