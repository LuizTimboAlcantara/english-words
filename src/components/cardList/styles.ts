import styled from "styled-components/native";

import { ICardListProps } from "./interfaces";

import colors from "@utils/theme/colors";

export const Container = styled.TouchableOpacity<ICardListProps>`
  flex: 1;
  height: 50px;
  align-self: center;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  margin: 5px 12px 12px 20px;
  background-color: ${colors.backgroundGray_200};
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  align-self: center;
  color: ${colors.dark};
`;
