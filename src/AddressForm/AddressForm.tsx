import React, { useState } from "react";
import { TextField } from "@material-ui/core";

export const AddressForm = () => {
  const [match, setMatch] = useState<Array<string>>();

  const handleChange = (e: any) => {
    const match = e.target.value.match(regularExpression); // match()
    setMatch(match);
  };

  const regularExpression = /^([a-zA-Z]{2,})\s([0-9]+)([a-zA-Z]{1})?/;
  // ^ --- start of line
  // () --- group
  // \s --- whitespace
  // {2,} and {1} --- quantifiers

  console.log("match", match);
  return (
    <>
      <form autoComplete="off">
        <TextField label="Address" variant="outlined" onChange={handleChange} />
      </form>
      {match ? (
        <div>
          <p>{`Street: ${match[1]}`}</p>
          <p>
            <span>{`No: ${match[2]}`}</span>
            <span>{match[3] !== undefined && match[3]}</span>
          </p>
        </div>
      ) : (
        <div>
          <p>{`Street: `}</p>
          <p>{`No: `}</p>
        </div>
      )}
    </>
  );
};
