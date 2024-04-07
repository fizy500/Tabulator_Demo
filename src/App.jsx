//App.jsx

import { useState, useMemo } from "react"; // for search functionality
import "./App.css";
import "react-tabulator/css/tabulator.min.css";
import { ReactTabulator } from "react-tabulator";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const options = {
    pagination: "remote", // or 'local'
    paginationSize: 10, // number of rows per page
  };

  const columns = [
    {
      title: "Name",
      field: "name",
      headerFilter: "input",
      headerFilterPlaceholder: "Search Name",
      headerFilterFunc: "like",
      headerFilterLiveFilter: true,
    },
    {
      title: "Age",
      field: "age",
      headerFilter: "input",
      headerFilterPlaceholder: "Search Age",
      headerFilterFunc: "like",
      headerFilterLiveFilter: true,
    },
    {
      title: "Country",
      field: "country",
      headerFilter: "input",
      headerFilterPlaceholder: "Search Country",
      headerFilterFunc: "like",
      headerFilterLiveFilter: true,
    },
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

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return data; // Return all data if no search query
    }
    return data.filter((row) =>
      Object.values(row).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  return (
    <>
      <h1 className='Demo_header'>Tabulator Demo</h1>
      <input
        type='text'
        placeholder='Search...'
        value={searchQuery}
        onChange={handleSearch}
      />
      <ReactTabulator
        data={filteredData}
        columns={columns}
        options={options}
      />
    </>
  );
}
