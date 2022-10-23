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

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="form_input">
      <h3 className="title">{!currentId ? "Create" : "Update"} user</h3>
      <form className="form_input" onSubmit={handleSubmit}>
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          id="firstname"
          name="firstName"
          required
          value={newUser.firstName}
          onChange={handelChange}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          id="lastname"
          name="firstName"
          required
          value={newUser.lastName}
          onChange={handelChange}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={newUser.email}
          onChange={handelChange}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={newUser.image}
          onChange={handelChange}
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
