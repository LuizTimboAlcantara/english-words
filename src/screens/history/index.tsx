import React, { useCallback, useContext, useState } from "react";

import WordContext from "@contexts/words";
import { getDetailsWord } from "@services/word";

import { goBack, goScreenWithParams } from "@routes/methodsOfNavigation";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import History from "./history";

const HistoryIndex = () => {
  const navigation = useNavigation();
  const { getHistory } = useContext(WordContext);

  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<TWord[]>([]);

  const handleGoBack = () => {
    goBack(navigation);
  };

  const getWordsHistory = async () => {
    const data = await getHistory();

    if (data) setWords(data);
  };

  const detailsWord = async (word: string) => {
    const response = await getDetailsWord(word);

    if (response?.status === 200) handleGoDetails(response.data);
    return;
  };

  const handleGoDetails = (params: any) => {
    goScreenWithParams(navigation, "Details", { data: params });
  };

  useFocusEffect(
    useCallback(() => {
      getWordsHistory();

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, [])
  );

  return (
    <History data={words} loading={loading} detailsWord={detailsWord} handleGoBack={handleGoBack} />
  );
};

export default HistoryIndex;
