import React from "react";

import { IOnBoardingProps } from "./interfaces";

import * as styled from "./styles";

const OnBoarding = (props: IOnBoardingProps) => {
  return (
    <styled.Container>
      <styled.WrapperContent>
        <styled.ContainerHeader></styled.ContainerHeader>
        <styled.ButtonBack onPress={props.handleSkipToEnd}>
          <styled.TitleSkip currentPage={props.currentPage} data={props.data}>
            Skip
          </styled.TitleSkip>
        </styled.ButtonBack>
      </styled.WrapperContent>

      <styled.ListCards
        horizontal
        pagingEnabled
        data={props.data}
        scrollEnabled={false}
        ref={props.flatlistRef}
        initialScrollIndex={0}
        extraData={props.currentPage}
        keyExtractor={(item: TOnBoarding) => item._id}
        renderItem={({ item }: { item: TOnBoarding }) => (
          <styled.ContentFlatList>
            <styled.ContainerImage>
              <styled.ImageCard source={item.img} />
            </styled.ContainerImage>

            <styled.ContainerTitle>
              <styled.TitleHeader>{item.title}</styled.TitleHeader>
            </styled.ContainerTitle>

            <styled.ContainerSubTitle>
              <styled.SubTitle>{item.description}</styled.SubTitle>
            </styled.ContainerSubTitle>
          </styled.ContentFlatList>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <styled.ContainerFooter>
        <styled.ContentFooter>
          <styled.WrapperImage>
            {props.data.map((_, index) => (
              <styled.ContentCurrentPage
                key={index}
                index={index}
                currentPage={props.currentPage}
              />
            ))}
          </styled.WrapperImage>

          {props.currentPage != props.data.length - 1 && props.data.length > 0 ? (
            <styled.ButtonNext onPress={props.handleNext}>
              <styled.TitleButton>Next</styled.TitleButton>
            </styled.ButtonNext>
          ) : (
            <styled.ButtonNext onPress={props.handleGoHome}>
              <styled.TitleStart>Begin</styled.TitleStart>
            </styled.ButtonNext>
          )}
        </styled.ContentFooter>
      </styled.ContainerFooter>
    </styled.Container>
  );
};

export default OnBoarding;
