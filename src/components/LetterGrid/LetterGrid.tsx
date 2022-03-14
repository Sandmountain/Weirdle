import React from "react";

import { Grid } from "@mui/material";

import LetterBox from "../LetterBox/LetterBox";

interface LetterGridProps {
  rows: string[][];
}

const LetterGrid: React.FC<LetterGridProps> = ({ rows }) => {
  const renderRow = (word: string[]): JSX.Element[] => {
    return word.map((letter, key) => {
      return <LetterBox key={key} letter={letter} />;
    });
  };

  const renderGrid = (words: string[][]): JSX.Element[] => {
    return words.map((word, key) => {
      return (
        <Grid
          key={key}
          container
          item
          spacing={1}
          direction={"row"}
          justifyContent={"center"}
          columns={6}>
          {renderRow(word)}
        </Grid>
      );
    });
  };

  return (
    <>
      <Grid container wrap="nowrap" direction={"column"} gap={1}>
        {renderGrid(rows)}
      </Grid>
    </>
  );
};

export default LetterGrid;
