import React, { createContext, ReactNode } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface WordsContextProps {
  getHistory: () => Promise<TWord[]>;
  getFavoritesWords: () => Promise<TWord[]>;
  saveHistory: (dataHistory: TWord) => Promise<void>;
  saveFavoriteWord: (word: TWord) => Promise<void>;
}

const wordContext = createContext<WordsContextProps>({} as WordsContextProps);

export const WordProvider = ({ children }: { children: ReactNode }) => {
  const getFavoritesWords = async () => {
    const data = await AsyncStorage.getItem("@english_words:favorites");
    const currentData = data ? JSON.parse(data) : [];

    return currentData;
  };

  const saveFavoriteWord = async (wordFavorite: any) => {
    const favoritesWord = await getFavoritesWords();

    const wordFavoritesExists = favoritesWord.some(
      (item: TWord) => item.word === wordFavorite.word
    );

    if (!wordFavoritesExists) {
      const newfavoritesWords = [...favoritesWord, wordFavorite];
      await AsyncStorage.setItem("@english_words:favorites", JSON.stringify(newfavoritesWords));
    } else {
      const updatedFavoritesWords = favoritesWord.filter(
        (item: TWord) => item.word !== wordFavorite.word
      );
      await AsyncStorage.setItem("@english_words:favorites", JSON.stringify(updatedFavoritesWords));
    }
  };

  const getHistory = async () => {
    const data = await AsyncStorage.getItem("@english_words:history");
    const currentData = data ? JSON.parse(data) : [];

    return currentData;
  };

  const saveHistory = async (dataHistory: any) => {
    const historyWord = await getHistory();

    const wordExists = historyWord.some((item: TWord) => item.word === dataHistory.word);

    if (!wordExists) {
      const newHistoryWords = [...historyWord, dataHistory];
      await AsyncStorage.setItem("@english_words:history", JSON.stringify(newHistoryWords));
    }
  };

  return (
    <wordContext.Provider value={{ getFavoritesWords, saveFavoriteWord, getHistory, saveHistory }}>
      {children}
    </wordContext.Provider>
  );
};

export default wordContext;
