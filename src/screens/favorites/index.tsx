import React, { useState, useCallback, useContext } from "react";

import { getDetailsWord } from "@services/word";
import WordContext from "@contexts/words";

import { goBack, goScreenWithParams } from "@routes/methodsOfNavigation";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import Favorites from "./favorites";

const FavoritesIndex = () => {
  const navigation = useNavigation();
  const { getFavoritesWords } = useContext(WordContext);

  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<TWord[]>([]);

  const handleGoBack = () => {
    goBack(navigation);
  };

  const getWordsFavorites = async () => {
    const data = await getFavoritesWords();

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
      getWordsFavorites();

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, [])
  );

  return (
    <Favorites
      data={words}
      loading={loading}
      detailsWord={detailsWord}
      handleGoBack={handleGoBack}
    />
  );
};

export default FavoritesIndex;
