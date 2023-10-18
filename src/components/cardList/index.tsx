import React from "react";

import { ICardListProps } from "./interfaces";

import * as styled from "./styles";

const CardList = (props: ICardListProps) => {
  return (
    <styled.Container {...props}>
      <styled.Title testID="title">{props.title}</styled.Title>
    </styled.Container>
  );
};

export default CardList;
