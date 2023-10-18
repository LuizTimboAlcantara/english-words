import { TouchableOpacityProps } from "react-native";

export interface ICardWithDateProps extends TouchableOpacityProps {
  date: Date;
  title: string;
  label: string;
}
