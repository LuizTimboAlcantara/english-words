import styled from "styled-components/native";

import colors from "@utils/theme/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const ListWords = styled.FlatList`
  left: 4px;
  bottom: 10px;
  padding-right: 12px;
`;

export const WrapperEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageEmpty = styled.Image`
  height: 250px;
  width: 250px;
`;

export const TitleEmpty = styled.Text`
  top: 5px;
  font-size: 16px;
`;
