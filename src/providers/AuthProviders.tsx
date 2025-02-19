import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";
import { ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";

type AuthData = {
    session: Session | null;
    loading: boolean;
    profile:any;
    setSession: (session: Session | null) => void;
    setProfile: (profile: any) => void;
};

export const AuthContext = createContext<AuthData>({
    session: null,
    loading: false,
    profile:null,
    setSession: () => {},
    setProfile: () => {},
});

export default function AuthProvider({ children }: {children: React.ReactNode}) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    console.log("Calling from authprovider")
    setLoading(true);
    const fetchSession = async () => {
      
      const { data,error } = await supabase.auth.getSession();
      console.log("Data authprovider",data.session);
      if(!data.session || data.session === null){
        setLoading(false);
        return <Redirect href={"/(auth)/login/email-login"}/>
      }
      setSession(data.session);
      if (session) {
        // fetch profile
        const { data } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();
        setProfile(data || null);
      }
      setLoading(false);
    };

    fetchSession();
  }, []);
  console.log("setLoading",loading)
  if(loading){
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  return <AuthContext.Provider value={{session,loading,profile,setProfile,setSession}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
