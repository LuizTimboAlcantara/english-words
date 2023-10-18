export interface IDetailsProps {
  data: TWord[];
  loading: boolean;
  handleGoBack: () => void;
  detailsWord: (word: string) => void;
}
