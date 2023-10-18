import React, { useRef, useState } from "react";
import { Alert } from "react-native";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase-config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { Formik } from "formik";
import { FormSchema, IntroForm, initialValues } from "./form";

import { goScreen } from "@routes/methodsOfNavigation";
import { useNavigation } from "@react-navigation/native";

import Login from "./login";

const LoginIndex = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const secondTextInputRef = useRef(null);
  const navigation = useNavigation();

  const [focusedField, setFocusedField] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSetFocused = (field: string) => {
    setFocusedField(field);
  };

  const submit = async (itens: IntroForm) => {
    try {
      if (itens.login != "" && itens.password != "" && !itens.createAccount) {
        const user = await signInWithEmailAndPassword(auth, itens.login, itens.password);

        if (user) handleGoOnBoarding();
      }

      if (itens.login != "" && itens.password != "" && itens.createAccount) {
        const user = await createUserWithEmailAndPassword(auth, itens.login, itens.password);

        if (user) handleGoOnBoarding();
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const handleGoOnBoarding = () => {
    goScreen(navigation, "OnBoarding");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submit} validationSchema={FormSchema}>
      <Login
        focusedField={focusedField}
        isPasswordVisible={isPasswordVisible}
        handleSetFocused={handleSetFocused}
        secondTextInputRef={secondTextInputRef}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </Formik>
  );
};

export default LoginIndex;
