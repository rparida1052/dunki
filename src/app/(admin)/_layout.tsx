import { useAuth } from "@/src/providers/AuthProviders";
import { Redirect, Stack, Tabs } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Navbar from "@/src/components/Navbar";
import { StatusBar } from "expo-status-bar";
const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    className="absolute -top-5 w-16 h-16 bg-orange-500 rounded-full items-center justify-center shadow-lg"
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

export default function HomeLayout() {

  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FF6F00",
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color="black" />
          ),
          headerShown: true,
          headerTitle: "Home",
          header(props) {
            return <Navbar title="Dunki" />;
          },
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="storefront" size={24} color="black" />
          ),
          header(props) {
            return <Navbar title="Dunki" />;
          },
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bar-chart" size={24} color="black" />
          ),
          headerShown: true,
          header(props) {
            return <Navbar title="Dunki" />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="add"
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Feather name="plus-circle" size={24} color="black" />
            </CustomTabBarButton>
          ),
        }}
      /> */}
    </Tabs>
  );
}
