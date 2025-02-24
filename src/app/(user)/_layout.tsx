import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Navbar from '@/src/components/Navbar';

const UserLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" />
      <Stack.Screen name="notification" options={{
        headerShown:true,
        header:()=>(
          <Navbar isnotificationVisible={false}/>
        )
      }} />
    </Stack>
  );
}

export default UserLayout

const styles = StyleSheet.create({})