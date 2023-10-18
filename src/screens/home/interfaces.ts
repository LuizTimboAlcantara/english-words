export interface IHomeProps {
  data: string[];
  loading: boolean;
  searchInputRef: any;
  searchQuery: string;
  loadMoreData: () => void;
  onChange: (query: string) => void;
  detailsWord: (word: string) => void;
  onChangeSearch: (query: string) => void;
}
