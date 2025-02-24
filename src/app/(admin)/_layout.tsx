import { useAuth } from "@/src/providers/AuthProviders";
import { Redirect, Stack, Tabs } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Navbar from "@/src/components/Navbar";
import { StatusBar } from "expo-status-bar";

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity style={styles.customTabBarButton} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="home"
              size={28}
              color={focused ? "white" : "black"}
              style={styles.icon}
            />
          ),
          headerShown: true,
          header(props) {
            return <Navbar isnotificationVisible={true} />;
          },
        }}
      />
      <Tabs.Screen
        name="store"
        options={{
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name="storefront"
              size={28}
              color={focused ? "white" : "black"}
              style={styles.icon}
            />
          ),
          header(props) {
            return <Navbar isnotificationVisible={true} />;
          },
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Feather name="plus-circle" size={32} color="black" />
            </CustomTabBarButton>
          ),
          headerShown: true,
          header(props) {
            return <Navbar isnotificationVisible={true} />;
          },
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="bar-chart"
              size={28}
              color={focused ? "white" : "black"}
              style={styles.icon}
            />
          ),
          headerShown: true,
          header(props) {
            return <Navbar isnotificationVisible={true} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="user"
              size={28}
              color={focused ? "white" : "black"}
              style={styles.icon}
            />
          ),
          headerShown: true,
          header(props) {
            return <Navbar isnotificationVisible={true} />;
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FF6F00",
    height: 60,
    borderRadius: 20,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  customTabBarButton: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF6F00",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    textAlign: "center",
  },
});
