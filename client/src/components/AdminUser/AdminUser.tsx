import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { deleteUserThunk } from "redux/services/user";

import { Users } from "types";

type UserProps = {
  user: Users;
  setCurrentId: any;
};

export default function AdminUser({ user, setCurrentId }: UserProps) {
  const dispatch = useAppDispatch();

  const handleSetId = () => {
    setCurrentId(user._id);
  };
  const handleDeleteUser = () => {
    dispatch(deleteUserThunk(user._id));
    window.location.reload();
    console.log(user._id);
  };

  return (
    <span>
      <span>
        <Link to={`/users/${user._id}`}>
          {user.firstName}, {user.lastName}
        </Link>
      </span>
      <button onClick={handleSetId}>Edit</button>
      <button onClick={handleDeleteUser}>delete</button>
    </span>
  );
}
