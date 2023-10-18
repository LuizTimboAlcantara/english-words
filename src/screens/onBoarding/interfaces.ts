export interface IOnBoardingProps {
  data: TOnBoarding[];
  currentPage: number;
  flatlistRef: unknown;
  handleNext: () => void;
  handleBack: () => void;
  handleGoHome: () => void;
  handleSkipToEnd: () => void;
}

export interface IOnBoardingStylesProps {
  index?: number;
  data?: TOnBoarding[];
  currentPage?: number;
}
