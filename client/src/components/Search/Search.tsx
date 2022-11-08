import React from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { searchByThunk } from "redux/services/product";

const Search = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const key = target.name;
    const value = target.value;

    // you should send a query to the request to follow this format
    // key=value&key=value ie name=Nike&price=20
    const query = `${key}=${value}`;
    console.log(query);
    dispatch(searchByThunk(query));
  };

  return (
    <>
      <input name="name" placeholder="search product" onChange={handleChange} />
    </>
  );
};
export default Search;
