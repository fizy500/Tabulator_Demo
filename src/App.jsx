// import React from 'react';
import "./App.css";
import "react-tabulator/css/tabulator.min.css";
import { ReactTabulator} from "react-tabulator";

export default function App() {
  
  const columns = [
    { title: "Name", field: "name" },
    { title: "Age", field: "age" },
    { title: "Country", field: "country" },
  ]; 

  let data = [
    { id: 1, name: "Adewale Kunle", age: "31", country: "Nigeria" },
    { id: 2, name: "Mary Smith", age: "1", country: "Peru" },
    {
      id: 3,
      name: "Leopold Vicktor",  
      age: "24",
      country: "Romania",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
  ];


  return (
    <>
      <h1 className='Demo_header'>Tabulator Demo</h1>
      <ReactTabulator
        data={data}
        columns={columns}
      />
    </>
  );
}
