import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import CardList from "@components/cardList";
import Header from "@components/header";

import debounce from "lodash.debounce";

import Skeleton from "./skeleton";

import { IHomeProps } from "./interfaces";

import Empty from "../../assets/searchEmpty.png";

import * as styled from "./styles";

const Home = (props: IHomeProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        props.searchInputRef.current?.blur();
      }}
    >
      <styled.Container>
        <Header title="Home" goBack={false} />
        <styled.WrapperSearch testID="search">
          <styled.SearchTopBar
            ref={props.searchInputRef}
            value={props.searchQuery}
            onChangeText={(e: string) => {
              props.onChangeSearch(e);
              const debouncedOnChange = debounce(() => {
                props.onChange(e);
              }, 2000);
              debouncedOnChange();
            }}
            placeholder="Search word..."
          />
        </styled.WrapperSearch>
        {props.loading && <Skeleton repeat={10} />}

        {!props.loading && props.data.length <= 0 && (
          <styled.WrapperEmpty>
            <styled.ImageEmpty source={Empty} />
            <styled.TitleEmpty>No results found!</styled.TitleEmpty>
          </styled.WrapperEmpty>
        )}

        {!props.loading && props.data.length > 0 && (
          <styled.ListWords
            numColumns={3}
            data={props.data}
            renderItem={({ item }: any) => (
              <CardList title={item} onPress={() => props.detailsWord(item)} />
            )}
            keyExtractor={(_: string, index: number) => index.toString()}
            onEndReachedThreshold={0.2}
            onEndReached={() => {
              props.loadMoreData();
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </styled.Container>
    </TouchableWithoutFeedback>
  );
};

export default Home;
