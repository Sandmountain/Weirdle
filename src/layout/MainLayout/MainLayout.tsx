import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Typography } from "@mui/material";

import "../../App.css";
import LetterGrid from "../../components/LetterGrid/LetterGrid";

// const template = [
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
//   ["", "", "", "", ""],
// ];

const generatePlayGrid = (columns: number, rows = 6): string[][] => {
  return Array(rows).fill(Array(columns).fill(""));
};

interface MainLayoutProps {
  wordSize?: number;
}

const MainLayout: React.FC<MainLayoutProps> = ({ wordSize = 5 }) => {
  const [input, setInput] = useState("");
  const [rows, setRows] = useState(generatePlayGrid(5));
  const [currentRow, setCurrentRow] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // Set limit for characters to be wordSize.
    if (
      e.target.value.length > wordSize &&
      (e.nativeEvent as InputEvent).inputType !== "deleteContentBackward"
    ) {
      return;
    }

    setInput(e.target.value.toUpperCase());

    // Pretty heavy operation, but that's what happens if you write bad code :D
    const letters = Array.from(e.target.value.toUpperCase());

    setRows(prev =>
      prev.map((row, idx) => {
        if (idx === currentRow) {
          return row.map((_, idx) => {
            return letters[idx] ? letters[idx] : "";
          });
        } else {
          return row;
        }
      }),
    );
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // get - https://api.dictionaryapi.dev/api/v2/entries/en/${input}
    //const strToArr = [...input];

    // rows[0].forEach(letter => {
    //   console.log(letter);
    // });

    setInput("");
    setCurrentRow(prev => prev + 1);
  };

  const onKeyboardInput = (): void => {
    const inputField = document.getElementById("textInput");
    //inputField?.innerText = ev.key;
    inputField?.focus();
  };

  useEffect(() => {
    window?.addEventListener("keydown", onKeyboardInput);
    return (): void => {
      window?.removeEventListener("keydown", onKeyboardInput);
    };
  }, []);

  return (
    <>
      <div className="App-header">
        <Typography variant="h4">Weirdle</Typography>
        <form onSubmit={onSubmit}>
          <input
            type="password"
            autoComplete="false"
            value={input}
            id={"textInput"}
            onChange={onChange}
            style={{ opacity: 0, position: "absolute" }}
          />
        </form>
        <LetterGrid rows={rows} />
      </div>
    </>
  );
};

export default MainLayout;
