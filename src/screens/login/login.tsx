import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import { ILogin } from "./interfaces";

import { useFormikContext } from "formik";
import { IntroForm } from "./form";

import Icon from "@expo/vector-icons/Ionicons";

import * as styled from "./styles";

const Login = (props: ILogin) => {
  const { errors, values, touched, handleChange, handleSubmit } = useFormikContext<IntroForm>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <styled.Wrapper>
        <styled.Container>
          <styled.Header>
            <styled.LogoApp />

            <styled.WrapperInputs>
              <styled.TitleInput>E-mail</styled.TitleInput>
              <styled.InputEmail
                placeholder="E-mail"
                autoCapitalize="none"
                selectTextOnFocus={true}
                defaultValue={values.login}
                keyboardType="email-address"
                textContentType="emailAddress"
                focusedField={props.focusedField}
                onChangeText={handleChange("login")}
                onFocus={() => props.handleSetFocused("email")}
                onSubmitEditing={() => props.secondTextInputRef.current.focus()}
              />
              {errors.login && touched.login && (
                <styled.ErrorDescription>{errors.login}</styled.ErrorDescription>
              )}

              <styled.WrapperPassWord>
                <styled.TitleInput>Password</styled.TitleInput>
                <styled.ContainerPassWord focusedField={props.focusedField}>
                  <styled.InputPassword
                    ref={props.secondTextInputRef}
                    placeholder="Senha"
                    autoCapitalize="none"
                    selectTextOnFocus={true}
                    textContentType="password"
                    defaultValue={values.password}
                    onChangeText={handleChange("password")}
                    secureTextEntry={!props.isPasswordVisible}
                    onFocus={() => props.handleSetFocused("password")}
                  />

                  <styled.ButtonEye onPress={props.togglePasswordVisibility}>
                    <Icon
                      name={!props.isPasswordVisible ? "eye-off-outline" : "eye"}
                      size={20}
                      color="gray"
                    />
                  </styled.ButtonEye>
                </styled.ContainerPassWord>

                {errors.password && touched.password && (
                  <styled.ErrorDescription>{errors.password}</styled.ErrorDescription>
                )}
              </styled.WrapperPassWord>

              <styled.WrapperButtonSignIn>
                <styled.ButtonSignIn onPress={() => handleSubmit((values.createAccount = false))}>
                  <styled.TitleButtonLogin>SignIn</styled.TitleButtonLogin>
                </styled.ButtonSignIn>
              </styled.WrapperButtonSignIn>

              <styled.WrapperButtonSignIn>
                <styled.ButtonSignIn onPress={() => handleSubmit((values.createAccount = true))}>
                  <styled.TitleButtonLogin>Create</styled.TitleButtonLogin>
                </styled.ButtonSignIn>
              </styled.WrapperButtonSignIn>
            </styled.WrapperInputs>
          </styled.Header>
        </styled.Container>
      </styled.Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default Login;
