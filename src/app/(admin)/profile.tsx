import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NextButton from '@/src/components/NextStepButton'
import { useAuth } from '@/src/providers/AuthProviders'
import { supabase } from '@/src/lib/supabase'
import { useRouter } from 'expo-router'

const Profile = () => {
  const router = useRouter()
  const logout = async ()=>{
    const {error} = await supabase.auth.signOut();
    console.log(error)
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