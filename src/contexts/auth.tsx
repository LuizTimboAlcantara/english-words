import React, { createContext, ReactNode } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextProps {
  logout: () => Promise<void>;
}

const authContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const logout = async () => {
    await AsyncStorage.removeItem("@english_words:history");
    await AsyncStorage.removeItem("@english_words:favorites");
  };

  return <authContext.Provider value={{ logout }}>{children}</authContext.Provider>;
};

export default authContext;
