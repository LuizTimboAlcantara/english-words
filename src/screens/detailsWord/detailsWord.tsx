import React from "react";

import Header from "@components/header";

import { IDetailsWordProps } from "./interfaces";

import * as styled from "./styles";

const DetailsWord = (props: IDetailsWordProps) => {
  return (
    <styled.Container>
      <Header title="Details Word" goBack onPress={props.handleGoBack} />

      <styled.WrapperWord>
        <styled.Word>{props.data[0].word}</styled.Word>
        <styled.Phonetic>{props.data[0].phonetic}</styled.Phonetic>
      </styled.WrapperWord>

      {props.audio && (
        <styled.WrapperMP3 audio={props.audio}>
          <styled.Play onPress={props.playSound}>
            <styled.IconSound />
          </styled.Play>
        </styled.WrapperMP3>
      )}

      <styled.WrapperMeanings>
        <styled.WrapperDetails>
          <styled.Title>Details</styled.Title>

          <styled.ButtonFavorite onPress={props.handleSetFavoriteWord}>
            {props.favorite ? <styled.IconIsFavorite /> : <styled.IconNoFavorite />}
          </styled.ButtonFavorite>
        </styled.WrapperDetails>

        <styled.WrapperInfo>
          <styled.SubTitle>Class: </styled.SubTitle>
          <styled.Info>{props.data[0].meanings[0].partOfSpeech}</styled.Info>
        </styled.WrapperInfo>

        <styled.WrapperInfo>
          <styled.SubTitle>Definition: </styled.SubTitle>
          <styled.Info>{props.data[0].meanings[0].definitions[0].definition}</styled.Info>
        </styled.WrapperInfo>

        {props.data[0].meanings[0].definitions[0].example && (
          <styled.WrapperInfo>
            <styled.SubTitle>Example: </styled.SubTitle>
            <styled.Info>{props.data[0].meanings[0].definitions[0].example}</styled.Info>
          </styled.WrapperInfo>
        )}

        {props.data[0].meanings[0].synonyms[0] && (
          <styled.WrapperInfo>
            <styled.SubTitle>Synonym: </styled.SubTitle>
            <styled.Info>{props.data[0].meanings[0].synonyms[0]}</styled.Info>
          </styled.WrapperInfo>
        )}

        {props.data[0].meanings[0].antonyms[0] && (
          <styled.WrapperInfo>
            <styled.SubTitle>Antonym: </styled.SubTitle>
            <styled.Info>{props.data[0].meanings[0].antonyms[0]}</styled.Info>
          </styled.WrapperInfo>
        )}
      </styled.WrapperMeanings>

      <styled.Footer>
        <styled.WrapperButton>
          <styled.ButtonBack onPress={props.handleGoBackWord}>
            <styled.IconBack />
            <styled.TitleButton>Back</styled.TitleButton>
          </styled.ButtonBack>
        </styled.WrapperButton>

        <styled.WrapperButton>
          <styled.ButtonNext onPress={props.handleGoNextWord}>
            <styled.TitleButton>Next</styled.TitleButton>
            <styled.IconNext />
          </styled.ButtonNext>
        </styled.WrapperButton>
      </styled.Footer>
    </styled.Container>
  );
};

export default DetailsWord;
