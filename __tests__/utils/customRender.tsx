import React, { ReactElement } from "react";

import { RenderOptions, render } from "@testing-library/react-native";

import { AuthProvider } from "@contexts/auth";
import { WordProvider } from "@contexts/words";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <WordProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </WordProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { customRender as render, Providers };
