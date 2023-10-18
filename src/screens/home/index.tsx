import React, { useState, useEffect, useRef } from "react";
import { Keyboard } from "react-native";

import jsonData from "@mocks/words_dictionary.json";

import { getDetailsWord } from "@services/word";
import { useNavigation } from "@react-navigation/native";

import { goScreenWithParams } from "@routes/methodsOfNavigation";

import Home from "./home";

const HomeIndex = () => {
  const navigation = useNavigation();
  const searchInputRef = useRef(null);

  const PAGE_SIZE = 50;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const loadMoreData = () => {
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const newData = jsonData.slice(startIndex, endIndex);
    setData([...data, ...newData]);
    setPage(page + 1);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const detailsWord = async (word: string) => {
    const response = await getDetailsWord(word);

    if (response?.status === 200) handleGoDetails(response.data);
    return;
  };

  const handleGoDetails = (params: any) => {
    goScreenWithParams(navigation, "Details", { data: params });
  };

  const loadFeedbacksSearch = (text: string) => {
    setLoading(true);

    const results = jsonData.filter((str) => str.toLowerCase().includes(text.toLowerCase()));
    setData(results);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const onChange = (event: string) => {
    if (event.length <= 0) {
      setData(jsonData.slice(0, 50));
    } else {
      loadFeedbacksSearch(event);
    }
  };

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    loadMoreData();

    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      searchInputRef.current?.blur();
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Home
      data={data}
      loading={loading}
      searchInputRef={searchInputRef}
      searchQuery={searchQuery}
      loadMoreData={loadMoreData}
      detailsWord={detailsWord}
      onChange={onChange}
      onChangeSearch={onChangeSearch}
    />
  );
};

export default HomeIndex;
