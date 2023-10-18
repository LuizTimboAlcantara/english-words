export interface IDetailsWordPropsIndex {
  route: {
    params: { data: any };
  };
}

export interface IDetailsWordProps {
  data: any;
  audio: string;
  favorite: boolean;
  playSound: () => void;
  handleGoBack: () => void;
  handleGoNextWord: () => void;
  handleGoBackWord: () => void;
  handleSetFavoriteWord: () => void;
}

export interface IDetailsWordStyleProps {
  audio?: string;
  isFavorite?: boolean;
}
