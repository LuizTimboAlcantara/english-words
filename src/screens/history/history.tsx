import React from "react";

import Skeleton from "./skeleton";
import { IHistoryProps } from "./interface";

import HistoryEmptyImage from "../../assets/historyEmpty.png";

import Header from "@components/header";
import CardWithDate from "@components/cardWithDate";

import * as styled from "./styles";

const History = (props: IHistoryProps) => {
  return (
    <styled.Container>
      <Header title="History" goBack onPress={props.handleGoBack} />

      {props.loading && <Skeleton repeat={10} />}

      {!props.loading && props.data && props.data.length <= 0 && (
        <styled.WrapperEmpty>
          <styled.ImageEmpty source={HistoryEmptyImage} />
          <styled.TitleEmpty>Your browsing history is empty!</styled.TitleEmpty>
        </styled.WrapperEmpty>
      )}

      {!props.loading && props.data && props.data.length > 0 && (
        <styled.ListWords
          numColumns={2}
          data={props.data}
          keyExtractor={(item: TWord) => item.word}
          renderItem={({ item }: { item: TWord }) => (
            <CardWithDate
              label="View"
              date={item.date}
              title={item.word}
              onPress={() => props.detailsWord(item.word)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </styled.Container>
  );
};

export default History;
