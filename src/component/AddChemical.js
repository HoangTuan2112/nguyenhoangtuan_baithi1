import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Label } from "reactstrap";
import { addChemical } from "../redux/chemicalSlice";
import "./addChemical.css";

export default function AddChemical(props) {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="add">
      <h1>Name:</h1>
      <Input
        type="text"
        placeholder="Add chemical"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setText("");
          }
        }}
      ></Input>
      <h1>Formula:</h1>
      <Input
        type="text"
        placeholder="Add chemical"
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setText1("");
          }
        }}
      ></Input>
      <div className="btn">
        <Button
          onClick={() => {
            dispatch(addChemical({ name: text, formula: text1 }));
            setText("");
            setText1("");
          }}
          className="btn"
          color="success"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
