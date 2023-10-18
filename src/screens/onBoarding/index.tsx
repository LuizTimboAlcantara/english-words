import React, { useState, useRef } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { goScreen } from "@routes/methodsOfNavigation";

import data from "../../mocks/onboarding";

import OnBorading from "./onBoarding";

const OnBoardingIndex = () => {
  const flatlistRef = useRef<FlatList<TOnBoarding> | null>(null);
  const navigation = useNavigation();

  const [render, setRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage == data.length) return;
    setCurrentPage(currentPage + 1);
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
    setRender(!render);
  };

  const handleBack = () => {
    if (currentPage == 0) return;
    setCurrentPage(currentPage - 1);
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
    setRender(!render);
  };

  const handleSkipToEnd = () => {
    setCurrentPage(data.length - 1);
    flatlistRef?.current?.scrollToIndex({
      animated: true,
      index: data.length - 1,
    });
    setRender(!render);
  };

  const handleGoHome = () => {
    goScreen(navigation, "Home");
  };

  return (
    <OnBorading
      data={data}
      handleNext={handleNext}
      handleBack={handleBack}
      currentPage={currentPage}
      flatlistRef={flatlistRef}
      handleGoHome={handleGoHome}
      handleSkipToEnd={handleSkipToEnd}
    />
  );
};

export default OnBoardingIndex;
