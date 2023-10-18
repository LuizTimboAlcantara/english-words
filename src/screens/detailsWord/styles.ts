import styled from "styled-components/native";

import { IDetailsWordStyleProps } from "./interfaces";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "@utils/theme/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const WrapperWord = styled.View`
  width: 95%;
  padding: 16px;
  margin-top: -10px;
  min-height: 150px;
  align-self: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${colors.backgroudGray};
`;

export const ButtonFavorite = styled.TouchableOpacity`
  top: 10px;
`;

export const IconIsFavorite = styled(MaterialCommunityIcons).attrs({
  name: "heart",
  size: 24,
})`
  top: 5px;
  color: red;
`;

export const IconNoFavorite = styled(MaterialCommunityIcons).attrs({
  name: "heart-outline",
  size: 24,
})`
  top: 5px;
  color: ${colors.dark};
`;

export const Word = styled.Text`
  padding: 16px;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  align-self: center;
  color: ${colors.dark};
`;

export const Phonetic = styled.Text`
  padding: 16px;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  align-self: center;
  color: ${colors.dark};
`;

export const WrapperMP3 = styled.View<IDetailsWordStyleProps>`
  display: flex;
  width: 70px;
  height: 70px;
  margin-top: 10px;
  border-radius: 35px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${colors.yellowBackground};
`;

export const Play = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconSound = styled(AntDesign).attrs({
  name: "sound",
  size: 30,
})`
  height: 30px;
  width: 30px;
`;

export const WrapperMeanings = styled.View`
  width: 95%;
  padding-left: 16px;
`;

export const WrapperDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperInfo = styled.View`
  max-width: 90%;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  padding: 40px 0 16px 0;
  font-size: 24px;
  line-height: 20px;
  font-weight: bold;
  align-self: flex-start;
  color: ${colors.dark};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  align-self: flex-start;
  color: ${colors.dark};
`;

export const Info = styled.Text`
  font-size: 14px;
  align-self: center;
  color: ${colors.dark};
`;

export const Example = styled.Text`
  padding: 16px;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  align-self: center;
  color: ${colors.dark};
`;

export const Synonyms = styled.Text`
  padding: 16px;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  align-self: center;
  color: ${colors.dark};
`;

export const Footer = styled.View`
  display: flex;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperButton = styled.View`
  padding: 16px;
  flex-direction: row;
  background-color: ${colors.eloBlueLight};
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.eloBlueLight};
`;

export const ButtonNext = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.eloBlueLight};
`;

export const TitleButton = styled.Text`
  font-size: 16px;
  color: ${colors.darkGray};
`;

export const IconBack = styled(MaterialCommunityIcons).attrs({
  name: "arrow-left",
  size: 20,
})`
  color: ${colors.darkGray};
`;

export const IconNext = styled(MaterialCommunityIcons).attrs({
  name: "arrow-right",
  size: 20,
})`
  color: ${colors.darkGray};
`;
