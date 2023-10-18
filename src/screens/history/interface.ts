export interface IHistoryProps {
  data: TWord[];
  loading: boolean;
  handleGoBack: () => void;
  detailsWord: (word: string) => void;
}
