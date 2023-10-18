import { TouchableOpacityProps } from "react-native";

export interface IHeaderProps extends TouchableOpacityProps {
  title: string;
  goBack: boolean;
  backgroundColor?: string;
}
