import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { MaterialIcons } from "@expo/vector-icons";

import colors from "@utils/theme/colors";

export const Container = styled.View`
  width: 100%;
  padding-top: 10px;
  bottom: ${getStatusBarHeight()};
  margin-top: ${-getStatusBarHeight()};
  background-color: ${colors.taBarGray};
`;

export const Content = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${getStatusBarHeight() + 30}px;
`;

export const WrapperButtonBack = styled.TouchableOpacity`
  left: 10px;
  width: 40px;
  height: 40px;
  position: absolute;
  justify-content: center;
`;

export const WrapperButtonLogOut = styled.TouchableOpacity`
  right: 2px;
  width: 40px;
  height: 40px;
  position: absolute;
  justify-content: center;
`;

export const IconGoBack = styled(MaterialIcons).attrs({
  name: "keyboard-arrow-left",
  size: 24,
})`
  color: ${colors.white};
`;

export const IconLogOut = styled(MaterialIcons).attrs({
  name: "logout",
  size: 20,
})`
  color: ${colors.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.white};
`;
