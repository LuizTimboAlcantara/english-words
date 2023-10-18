import styled from "styled-components/native";
import { Platform, KeyboardAvoidingView } from "react-native";

import { ILoginStyle } from "./interfaces";

import Logo from "../../assets/dicionario.png";

import colors from "@utils/theme/colors";

export const Wrapper = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
`;

export const LogoApp = styled.Image.attrs({
  source: Logo,
})`
  align-self: center;
  height: 250px;
  width: 250px;
`;

export const Header = styled.ScrollView`
  width: 90%;
`;

export const WrapperInputs = styled.View`
  top: 24px;
`;

export const InputEmail = styled.TextInput<ILoginStyle>`
  top: 8px;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${({ focusedField }: ILoginStyle) =>
    focusedField === "email" ? colors.eloBlue_200 : colors.grayDividerLine_200};
`;

export const InputPassword = styled.TextInput`
  flex: 1;
  padding: 12px;
`;

export const TitleInput = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${colors.dark};
`;

export const WrapperPassWord = styled.View`
  margin-top: 32px;
`;

export const ContainerPassWord = styled.View<ILoginStyle>`
  top: 8px;
  width: 100%;
  border-radius: 4px;
  align-items: center;
  border-width: 2px;
  flex-direction: row;
  border-color: ${({ focusedField }: ILoginStyle) =>
    focusedField === "password" ? colors.eloBlue_200 : colors.grayDividerLine_200};
`;

export const WrapperButtonSignIn = styled.View`
  margin-top: 32px;
`;

export const ButtonEye = styled.TouchableOpacity`
  padding: 10px;
`;

export const ButtonSignIn = styled.TouchableOpacity`
  display: flex;
  padding: 12px 16px;
  border-radius: 4px;
  align-items: center;
  background: ${colors.eloBlue_200};
  justify-content: center;
`;

export const TitleButtonLogin = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 16px;
  color: ${colors.white};
`;

export const Footer = styled.View`
  width: 90%;
  height: 50%;
  bottom: ${Platform.OS === "ios" ? 40 : 60}px;
  justify-content: flex-end;
`;

export const WrapperFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonOtherLogins = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
  width: 150px;
  justify-content: center;
  align-items: center;
  border-width: 0.5px;
  border-color: ${colors.grayDividerLine_200};
  border-radius: 4px;
`;

export const TitleOtherLogins = styled.Text`
  left: 8px;
  font-size: 14px;
  line-height: 20px;
  font-style: normal;
`;

export const ErrorDescription = styled.Text`
  font-size: 16px;
  padding-top: 15px;
  color: ${colors.redWarning};
`;
