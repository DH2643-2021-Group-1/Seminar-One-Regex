import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

interface Props {}

export const AddressForm = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [valid, setIsValid] = useState<boolean>(false);
  const [addressArray, setAddressArray] = useState<Array<string>>([""]);

  const onTextChange = (e: any) => {
    const address = e.target.value;
    setValue(address);
    const match = address.match(regularExpression);
    setAddressArray(match);
    console.log("match! " + match);
    match !== null ? setIsValid(true) : setIsValid(false); // TODO ha kvar?
  };

  const regularExpression = /^([a-zA-Z]{2,})\s([0-9]+)([a-zA-Z]{1})/;

  return (
    <form noValidate autoComplete="off">
      <TextField
        required
        id="outlined-basic"
        label="Email address"
        variant="outlined"
        value={value}
        onChange={onTextChange}
      />
      {valid ? (
        <div style={{ fontSize: "42px" }}>
          <div>Street: {addressArray[0]}</div>
          <div>No: {addressArray[1]}</div>
          <div>Postal code: {}</div>
        </div>
      ) : (
        <div style={{ fontSize: "42px" }}>
          <div>Street: </div>
          <div>No: </div>
          <div>Postal code: </div>
        </div>
      )}
    </form>
  );
};
