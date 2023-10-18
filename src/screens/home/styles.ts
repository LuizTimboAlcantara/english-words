import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";

import colors from "@utils/theme/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const ListWords = styled.FlatList`
  left: -2px;
  bottom: 10px;
  padding-right: 5px;
`;

export const WrapperSearch = styled.View``;

export const SearchTopBar = styled(Searchbar).attrs({
  iconColor: colors.taBarGray,
  placeholderTextColor: colors.gray_700,
  fontSize: 14,
  left: -10,
})`
  width: 90%;
  left: 18px;
  bottom: 14px;
  background-color: ${colors.grayDividerLine};
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
  font-size: 16px;
`;
