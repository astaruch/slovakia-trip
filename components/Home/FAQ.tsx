import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import { Header2, Header5, ParagraphBig } from "components/common/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { useImmer } from "use-immer";

const FAQ: FC = (props) => {
  const [openSections, setOpenSections] = useImmer<{
    [key: string]: boolean;
  }>(
    [...FaqLeft, ...FaqRight].reduce(
      (acc, curr) => ({ ...acc, [curr.id]: false }),
      {}
    )
  );
  return (
    <FaqWrapper>
      <FaqHeader>FAQ</FaqHeader>
      <FaqQuestionsWrapper>
        {FaqLeft.map(({ id, title, text }) => (
          <Fragment key={id}>
            <ListItem
              button={true}
              key={id}
              onClick={() => {
                setOpenSections((draft) => {
                  draft[id] = !draft[id];
                });
              }}
            >
              <FaqQuestion>{title}</FaqQuestion>
            </ListItem>
            <Collapse in={openSections[id]} timeout="auto" unmountOnExit>
              <FaqAnswer>{text}</FaqAnswer>
            </Collapse>
          </Fragment>
        ))}
      </FaqQuestionsWrapper>
      <FaqQuestionsWrapper>
        {FaqRight.map(({ id, title, text }) => (
          <Fragment key={id}>
            <ListItem
              button={true}
              key={id}
              onClick={() => {
                setOpenSections((draft) => {
                  draft[id] = !draft[id];
                });
              }}
            >
              <FaqQuestion>{title}</FaqQuestion>
            </ListItem>
            <Collapse in={openSections[id]} timeout="auto" unmountOnExit>
              <FaqAnswer>{text}</FaqAnswer>
            </Collapse>
          </Fragment>
        ))}
      </FaqQuestionsWrapper>
    </FaqWrapper>
  );
};

export default FAQ;

const FaqWrapper = styled.section`
  margin-top: 1rem;
  width: 81.25rem;
  display: flex;
  flex-wrap: wrap;
`;

const FaqHeader = styled(Header2)`
  text-align: start;
  width: 100%;
`;

const FaqQuestionsWrapper = styled.div`
  width: 50%;
`;

const FaqQuestion = styled(Header5)`
  margin-top: 0;
  margin-bottom: 0;
`;
const FaqAnswer = styled(ParagraphBig)`
  color: ${({ theme }) => theme.color.gray50};
`;

const FaqLeft = [
  {
    id: 7,
    title: "What is sentiment analysis?",
    text:
      "Sentiment analysis is an automated process that decides if a sentence is positive, negative, or neutral. It helps to determine the emotional trends that are expressed online.",
  },
  {
    id: 8,
    title: "Why use sentiment analysis?",
    text:
      "It is impossible for a person to manually interpret the world’s text-based data due to it being so incredibly massive! CryptoMood’s sentiment analysis system does the job through automation and produces an evaluation based on the data collected.",
  },
  {
    id: 9,
    title: "What is sentiment analysis?",
    text:
      "Sentiment analysis is an automated process that decides if a sentence is positive, negative, or neutral. It helps to determine the emotional trends that are expressed online.",
  },
  {
    id: 10,
    title: "Why use sentiment analysis?",
    text:
      "It is impossible for a person to manually interpret the world’s text-based data due to it being so incredibly massive! CryptoMood’s sentiment analysis system does the job through automation and produces an evaluation based on the data collected.",
  },
];

const FaqRight = [
  {
    id: 1,
    title: "What is sentiment analysis?",
    text:
      "Sentiment analysis is an automated process that decides if a sentence is positive, negative, or neutral. It helps to determine the emotional trends that are expressed online.",
  },
  {
    id: 2,
    title: "Why use sentiment analysis?",
    text:
      "It is impossible for a person to manually interpret the world’s text-based data due to it being so incredibly massive! CryptoMood’s sentiment analysis system does the job through automation and produces an evaluation based on the data collected.",
  },
  {
    id: 3,
    title: "What is sentiment analysis?",
    text:
      "Sentiment analysis is an automated process that decides if a sentence is positive, negative, or neutral. It helps to determine the emotional trends that are expressed online.",
  },
  {
    id: 4,
    title: "Why use sentiment analysis?",
    text:
      "It is impossible for a person to manually interpret the world’s text-based data due to it being so incredibly massive! CryptoMood’s sentiment analysis system does the job through automation and produces an evaluation based on the data collected.",
  },
  {
    id: 5,
    title: "What is sentiment analysis?",
    text:
      "Sentiment analysis is an automated process that decides if a sentence is positive, negative, or neutral. It helps to determine the emotional trends that are expressed online.",
  },
  {
    id: 6,
    title: "Why use sentiment analysis?",
    text:
      "It is impossible for a person to manually interpret the world’s text-based data due to it being so incredibly massive! CryptoMood’s sentiment analysis system does the job through automation and produces an evaluation based on the data collected.",
  },
];
