import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { createUserThunk, updateUserThunk } from "redux/services/user";
import { CurrentId, PickedPropsEditUser } from "types";

import "./users.css";

export default function EditUser({ currentId, setCurrentId }: CurrentId) {
  const [newUser, setNewUser] = useState<PickedPropsEditUser>({
    firstName: "",
    lastName: "",
    email: "",
    image: "",
  });
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const user = users.find((user) => user._id === currentId);
  console.log(user);

  useEffect(() => {
    if (user) {
      setNewUser(user);
    }
  }, [user]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateUserThunk({ id: currentId, user: newUser }));
    } else {
      dispatch(createUserThunk(newUser));
    }
    clear();
  };

  const clear = () => {
    setCurrentId("");
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      image: "",
    });
  };

  const handelSetFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, firstName: e.target.value });
  };

  const handelSetLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, lastName: e.target.value });
  };

  const handelSetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, email: e.target.value });
  };

  const handelSetImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, image: e.target.value });
  };

  return (
    <div className="form_input">
      <h3 className="title">{!currentId ? "Create" : "Update"} user</h3>
      <form className="form_input" onSubmit={handleSubmit}>
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          id="firstname"
          required
          value={newUser.firstName}
          onChange={handelSetFirstName}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          id="firstname"
          required
          value={newUser.lastName}
          onChange={handelSetLastName}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          required
          value={newUser.email}
          onChange={handelSetEmail}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          value={newUser.image}
          onChange={handelSetImage}
        />
        <button className="user_btn">
          {!currentId ? "Create" : "Update"} user
        </button>
        <button className="user_btn" onClick={clear}>
          Reset
        </button>
      </form>
    </div>
  );
}
