import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

import { ISkeletonProps } from "./interfaces";

import * as styled from "./styles";

const Skeleton = ({ width, height, style }: ISkeletonProps) => {
  const [waveAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(waveAnimation, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => animation.stop();
  }, [900, waveAnimation]);

  const waveTranslateX = waveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <styled.Container style={[{ width, height }, style]}>
      <styled.ViewAnimated style={[{ transform: [{ translateX: waveTranslateX }] }]} />
    </styled.Container>
  );
};

export default Skeleton;
