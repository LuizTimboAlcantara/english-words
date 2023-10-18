import React from "react";

import { IDetailsProps } from "./interface";

import Skeleton from "./skeleton";
import Header from "@components/header";
import CardWithDate from "@components/cardWithDate";

import Favoritos from "../../assets/favoritos.png";

import * as styled from "./styles";

const Favorites = (props: IDetailsProps) => {
  return (
    <styled.Container>
      <Header title="Favorites" goBack onPress={props.handleGoBack} />

      {props.loading && <Skeleton repeat={10} />}

      {!props.loading && props.data && props.data.length <= 0 && (
        <styled.WrapperEmpty>
          <styled.ImageEmpty source={Favoritos} />
          <styled.TitleEmpty>You haven't marked any words yet!</styled.TitleEmpty>
        </styled.WrapperEmpty>
      )}

      {!props.loading && props.data && props.data.length > 0 && (
        <styled.ListWords
          numColumns={2}
          data={props.data}
          keyExtractor={(item: TWord) => item.word}
          renderItem={({ item }: { item: TWord }) => (
            <CardWithDate
              label="Favorited"
              title={item.word}
              date={item.date}
              onPress={() => props.detailsWord(item.word)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </styled.Container>
  );
};

export default Favorites;
