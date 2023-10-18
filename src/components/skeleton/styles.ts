import styled from "styled-components/native";

import { Animated } from "react-native";

export const Container = styled.View`
  overflow: hidden;
  background-color: #d0d0d0;
`;

export const ViewAnimated = styled(Animated.View)`
  width: 200%;
  height: 100%;
  background-color: #e0e0e0;
`;
