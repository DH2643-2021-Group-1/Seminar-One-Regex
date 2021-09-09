import React, { useState } from "react";
import { TextField } from "@material-ui/core";

interface Props {}

export const InputForm = (props: Props) => {
  const [textValue, setTextValue] = useState<string>("");
  const [valid, setIsValid] = useState<boolean>(false);

  const onTextChange = (e: any) => {
    const email = e.target.value;
    setTextValue(email);
    const isOK = simpleRegex.test(email);
    //const isOK = saferRegex.test(email);
    isOK ? setIsValid(true) : setIsValid(false);
  };

  const simpleRegex = /\S+@\S+\.\S+/;
  // \S 👉 Not whitespace. Matches any char that is not a whitespace character
  // +  👉 Quantifier. Match 1 or more occurences of the preceding token.
  // @  👉 Matches a "@" character
  // \. 👉 Escaped character. Matches a "." character

  const saferRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // safer

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="E-mail address"
        variant="outlined"
        value={textValue}
        onChange={onTextChange}
      />
      <div style={{ fontSize: "72px" }}>{valid ? "👌" : "🤢"}</div>
    </form>
  );
};
