import React from "react";

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface LetterBoxProps {
  letter: string;
  correctSpot?: boolean;
  correctLetter?: boolean;
}

const getBackgroundColor = (
  correctSpot: boolean | undefined,
  correctLetter: boolean | undefined,
): string => {
  // TODO: find good green color
  if (correctSpot) {
    return "green";
  }
  // TODO: find good yellow color
  if (correctLetter) {
    return "#FFFF0020";
  }

  return "";
};

const LetterBox: React.FC<LetterBoxProps> = ({
  letter,
  correctSpot,
  correctLetter,
}) => {
  return (
    <Grid item>
      <Box
        className={letter !== "" ? "letterBox_animation" : undefined}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "1em",
          width: "1em",
          padding: "0.3em",
          border: letter !== "" ? "3px solid #ffffff10" : "3px solid #00000034",
          background: getBackgroundColor(correctSpot, correctLetter),
        }}>
        <Typography>{letter}</Typography>
      </Box>
    </Grid>
  );
};

export default LetterBox;
