import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteChemical, updateChemical } from "../redux/chemicalSlice";
import { Button, Input } from "reactstrap";
import './item.css'

export default function ChemicalItem(props) {
  const {
    chemical,
    isEdit,
    setIsEdit,
    idEdit,
    setIdEdit,
    isEdit2,
    setIsEdit2,
    idEdit2,
    setIdEdit2,
  } = props;
  const dispatch = useDispatch();
  const [text, setText] = useState(chemical.name);
  const [text2, setText2] = useState(chemical.formula);
  return (
    <tr>
      <td>{chemical.id}</td>
      <td>
        {idEdit == chemical.id && isEdit ? (
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(
                  updateChemical({
                    id: chemical.id,
                    name: text,
                    formula: chemical.formula,
                  })
                );
                setIsEdit(false);
                setIdEdit(null);
              }
            }}
          />
        ) : (
          <p
            onClick={() => {
              setIsEdit(true);
              setIdEdit(chemical.id);
            }}
          >
            {chemical.name}
          </p>
        )}
      </td>
      <td>
        {idEdit2 == chemical.id && isEdit2 ? (
          <Input
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(
                  updateChemical({
                    id: chemical.id,
                    name: chemical.name,
                    formula: text2
                  })
                );
                setIsEdit2(false);
                setIdEdit2(null);
              }
            }}
          />
        ) : (
          <p
            onClick={() => {
              setIsEdit2(true);
              setIdEdit2(chemical.id);
            }}
          >
            {chemical.formula}
          </p>
        )}
      </td>
      <td>
        <Button
          color="danger"
          onClick={() => {
            dispatch(deleteChemical(chemical.id));
            console.log(chemical.id);
          }}
          className="btn"
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
