import React, { useState, useContext, useEffect } from "react";

import DetailsWord from "./detailsWord";
import { getDetailsWord } from "@services/word";
import { goBack } from "@routes/methodsOfNavigation";
import { useNavigation } from "@react-navigation/native";

import WordContext from "@contexts/words";
import { IDetailsWordPropsIndex } from "./interfaces";

import { Audio } from "expo-av";
import jsonData from "@mocks/words_dictionary.json";

const DetailsWordIndex = (props: IDetailsWordPropsIndex) => {
  const { data } = props.route.params;
  const navigation = useNavigation();

  const { saveFavoriteWord, saveHistory, getFavoritesWords } = useContext(WordContext);

  const [audio, setAudio] = useState("");
  const [render, setRender] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(data);

  const handleGoBack = () => {
    goBack(navigation);
  };

  const handleGoNextWord = async () => {
    registerHistory();

    const nextIndex = currentIndex + 1;

    if (nextIndex < jsonData.length) {
      const nextWord = jsonData[nextIndex];
      await detailsWord(nextWord);
      setCurrentIndex(nextIndex);
    }
  };

  const handleGoBackWord = async () => {
    registerHistory();

    const nextIndex = currentIndex - 1;

    if (nextIndex < jsonData.length) {
      const nextWord = jsonData[nextIndex];
      await detailsWord(nextWord);
      setCurrentIndex(nextIndex);
    }
  };

  const detailsWord = async (word: string) => {
    const response = await getDetailsWord(word);

    if (response?.status === 200) setCurrentWord(response.data);
  };

  const playSound = async () => {
    if (audio && audio.length > 0) {
      const { sound } = await Audio.Sound.createAsync({
        uri: audio,
      });
      await sound.playAsync();
    }
  };

  const handleSetFavoriteWord = async () => {
    await saveFavoriteWord({ word: currentWord[0].word, date: new Date() });
    setIsFavorite(!isFavorite);
    setRender(!render);
  };

  const registerHistory = async () => {
    await saveHistory({ word: currentWord[0].word, date: new Date() });
  };

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const favorites = await getFavoritesWords();
      const isCurrentWordFavorite = favorites.some((item) => item.word === currentWord[0].word);
      setIsFavorite(isCurrentWordFavorite);
    };

    registerHistory();
    checkFavoriteStatus();
  }, [currentWord]);

  useEffect(() => {
    setCurrentWord(data);
    setCurrentIndex(jsonData.indexOf(data[0].word));
  }, [data]);

  useEffect(() => {
    const updateAudio = async () => {
      if (currentWord[0].phonetics && currentWord[0].phonetics.length > 0) {
        const phoneticWithAudio = currentWord[0].phonetics.find((item) => item.audio !== "");
        if (phoneticWithAudio) {
          setAudio(phoneticWithAudio.audio);
        }
      }
    };

    updateAudio();
  }, [currentWord]);

  return (
    <DetailsWord
      audio={audio}
      data={currentWord}
      favorite={isFavorite}
      playSound={playSound}
      handleGoBack={handleGoBack}
      handleGoNextWord={handleGoNextWord}
      handleGoBackWord={handleGoBackWord}
      handleSetFavoriteWord={handleSetFavoriteWord}
    />
  );
};

export default DetailsWordIndex;
