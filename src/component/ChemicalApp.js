import { Button, Container, Tab } from "reactstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table } from "reactstrap";
import ChemicalItem from "./ChemicalItem";
import AddChemical from "./AddChemical";
import {
  addChemical,
  deleteChemical,
  filterChemical,
} from "../redux/chemicalSlice";
import "./chemicalApp.css";

export default function ChemicalApp() {
  const chemicals = useSelector((state) => state.chemical.chemicals);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(null);
  const [isEdit2, setIsEdit2] = useState(false);
  const [idEdit2, setIdEdit2] = useState(null);
  const [flag, setFlag] = useState("");
  const [search, setSearch] = useState("");
  const [list, setList] = useState(chemicals);
  const filterChemical2 = (flag, text) => {
    if (flag === "") {
      return list;
    } else if (flag === "name") {
      return list.filter((chemical) =>
        chemical.name.toLowerCase().includes(text.toLowerCase())
      );
    } else if (flag === "formula") {
      return list.filter((chemical) =>
        chemical.formula.toLowerCase().includes(text.toLowerCase())
      );
    }
  };
  useEffect(() => {
    setList(chemicals);
  }, [chemicals]);

  return (
    <div>
      <Container>
       

        <AddChemical></AddChemical>
        <div className="searchBar">
        <h1  className="search">Search</h1>
          {/* enter moi search ra theo name z chi name co */}
          <Input
            className="search"
            placeholder="search chemical by name enter moi ra ket qua mong muon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                filterChemical2(setFlag("name"), search);
              }
            }}
          ></Input>
          {/* enter moi search ra theo formula j chi formula co */}
          <Input
            className="search"
            placeholder="search chemical by formula enter moi ra ket qua mong muon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                filterChemical2(setFlag("formula"), search);
              }
            }}
          ></Input>
        </div>

        <Table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Formula</th>
            <th>Action</th>
          </thead>
          <tbody>
            {filterChemical2(flag, search).map((chemical) => (
              //props to chemicalItem
              <ChemicalItem
                key={chemical.id}
                chemical={chemical}
                isEdit={isEdit}
                setIdEdit={setIdEdit}
                idEdit={idEdit}
                setIsEdit={setIsEdit}
                isEdit2={isEdit2}
                setIdEdit2={setIdEdit2}
                idEdit2={idEdit2}
                setIsEdit2={setIsEdit2}
              ></ChemicalItem>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
