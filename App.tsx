import React from "react";
import { LogBox } from "react-native";

import { AuthProvider } from "@contexts/auth";
import { WordProvider } from "@contexts/words";

LogBox.ignoreAllLogs(true);

import Routes from "@routes/index";

const App = () => {
  return (
    <AuthProvider>
      <WordProvider>
        <Routes />
      </WordProvider>
    </AuthProvider>
  );
};

export default App;
