import styled from "styled-components/native";

import { ICardWithDateProps } from "./interfaces";

import colors from "@utils/theme/colors";

export const Container = styled.TouchableOpacity<ICardWithDateProps>`
  flex: 1;
  height: 50px;
  border-radius: 4px;
  flex-direction: row;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 10px 12px 12px;
  background-color: ${colors.backgroundGray_200};
`;

export const WrapperTitle = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 14px;
  align-self: left;
  line-height: 20px;
  padding-left: 5px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  align-self: left;
  line-height: 20px;
  color: ${colors.dark};
`;
