import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

interface SquareButtonProps {
  path?:string;
  className?: string;
}
const SquareButton = ({
  path = "/(admin)/(home)/order-details",
  className,
}: SquareButtonProps) => {
  const router = useRouter();
  return (
    <Pressable
      className={`min-w-24 max-w-28 bg-primary h-full items-center justify-center ${className}`}
      onPress={() => router.push(path)}>
      <View>
        <AntDesign name="arrowright" size={36} color="white" />
      </View>
    </Pressable>
  );
};

export default SquareButton;

const styles = StyleSheet.create({});
