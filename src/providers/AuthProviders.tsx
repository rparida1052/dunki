import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

import { ActivityIndicator } from "react-native";
import { Redirect } from "expo-router";

type AuthData = {
    session: any | null;
    loading: boolean;
    profile:any;
    setSession: (session: any | null) => void;
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
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    console.log("Calling from authprovider")
    setLoading(true);
    const fetchSession = async () => {
      
     
    
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
