import { useAuth } from "@/src/providers/AuthProviders";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {

  const {session} = useAuth();
  if(session){
    return <Redirect href={"/"}/>
  }
  return (
    <Stack>
      <Stack.Screen
        name="login/email-signup"
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen name="login/email-login" options={{headerShown:false}}/>
      <Stack.Screen name="login/add-name" options={{ headerShown: false }} />
      <Stack.Screen name="login/add-shop" options={{ headerShown: false }} />
      <Stack.Screen name="login/verify-otp" options={{ headerShown: false }} />
    </Stack>
  );
}
