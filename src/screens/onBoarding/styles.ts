import styled from "styled-components/native";

import { Dimensions } from "react-native";

import { IOnBoardingStylesProps } from "./interfaces";

import Icon from "@expo/vector-icons/AntDesign";

import colors from "@utils/theme/colors";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.backgroundGray_200};
`;

export const WrapperContent = styled.SafeAreaView``;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

export const ListCards = styled.FlatList``;

export const IconArrowLeft = styled(Icon).attrs({
  size: 25,
  name: "left",
})<IOnBoardingStylesProps>`
  color: ${colors.eloBlue};
  opacity: ${({ currentPage }: IOnBoardingStylesProps) => (currentPage === 0 ? 0 : 1)};
`;

export const ButtonBack = styled.TouchableOpacity`
  color: ${colors.white};
`;

export const TitleSkip = styled.Text<IOnBoardingStylesProps>`
  align-self: flex-end;
  right: 37px;
  color: ${colors.eloBlue};
  font-size: 16px;
  padding-top: 40px;
  opacity: ${({ currentPage, data }: IOnBoardingStylesProps) =>
    currentPage === data!.length - 1 ? 0 : 1};
`;

export const ContainerFooter = styled.SafeAreaView``;

export const ContentFooter = styled.View`
  align-items: center;
  padding-horizontal: 20px;
  padding-vertical: 20px;
`;

export const WrapperImage = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ContentCurrentPage = styled.View.attrs(({ index }: IOnBoardingStylesProps) => ({
  key: index,
}))<IOnBoardingStylesProps>`
  width: ${({ index, currentPage }: IOnBoardingStylesProps) => (index == currentPage ? 24 : 6)}px;
  height: 6px;
  margin-right: 8px;
  border-radius: 5px;
  margin-bottom: 40px;
  background-color: ${({ index, currentPage }: IOnBoardingStylesProps) =>
    index == currentPage ? colors.pink : colors.gray};
`;

export const ButtonNext = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 4px;
  background-color: ${colors.blueCard};
`;

export const TitleNext = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: ${colors.white};
`;

export const IconArrowRightOpacity = styled(Icon).attrs({
  size: 18,
  name: "right",
})<IOnBoardingStylesProps>`
  opacity: 0.3;
  color: ${colors.white};
  margin-left: 10px;
`;

export const IconArrowRight = styled(Icon).attrs({
  size: 25,
  name: "right",
})<IOnBoardingStylesProps>`
  color: ${colors.white};
  margin-left: -15px;
`;

export const TitleButton = styled.Text`
  color: ${colors.white};
  font-size: 16px;
`;

export const TitleStart = styled.Text`
  color: ${colors.white};
  margin-left: 10px;
  font-size: 14px;
`;

export const ButtonStart = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 4px;
  background-color: ${colors.eloPink};
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const ContentFlatList = styled.View`
  display: flex;
  width: ${width};
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerTitle = styled.View`
  padding-horizontal: 40px;
  margin-vertical: 10px;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  color: ${colors.dark};
`;

export const ContainerImage = styled.View`
  align-items: center;
  margin-vertical: 10px;
`;

export const ImageCard = styled.ImageBackground.attrs({
  resizeMode: "contain",
})`
  width: 343px;
  height: 362px;
`;

export const ContainerSubTitle = styled.View`
  margin-vertical: 10px;
  padding-horizontal: 30px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${colors.gray_700};
`;
