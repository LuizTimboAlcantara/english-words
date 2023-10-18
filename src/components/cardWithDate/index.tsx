import React from "react";

import { ICardWithDateProps } from "./interfaces";

import { formatDateDefault } from "@utils/methodsOfDate";

import * as styled from "./styles";

const CardWithDate = (props: ICardWithDateProps) => {
  return (
    <styled.Container {...props}>
      <styled.WrapperTitle>
        <styled.Title>Word: </styled.Title>
        <styled.SubTitle testID="word">{props.title}</styled.SubTitle>
      </styled.WrapperTitle>

      <styled.WrapperTitle>
        <styled.Title testID="label">{props.label}: </styled.Title>
        <styled.SubTitle>{formatDateDefault(props.date)}</styled.SubTitle>
      </styled.WrapperTitle>
    </styled.Container>
  );
};

export default CardWithDate;
