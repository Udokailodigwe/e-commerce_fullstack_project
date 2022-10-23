import React from "react";
import { Table } from "react-bootstrap";
import { useAppDispatch } from "redux/hooks";
import { deleteUserThunk } from "redux/services/user";

import { Users } from "types";

import "./users.css";

type UserProps = {
  user: Users;
  setCurrentId: any;
};

export default function ManageUser({ user, setCurrentId }: UserProps) {
  const dispatch = useAppDispatch();

  const handleSetId = () => {
    setCurrentId(user._id);
  };
  const handleDeleteUser = () => {
    dispatch(deleteUserThunk(user._id));
  };

  return (
    <Table className="table" striped bordered hover>
      <thead>
        <tr>
          <th>FIRSTNAME</th>
          <th>LASTNAME</th>
          <th>EMAIL</th>
          <th>EDIT</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr key={user._id}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>
            <button className="user_btn" onClick={handleSetId}>
              Edit
            </button>
          </td>
          <td>
            <button className="user_btn" onClick={handleDeleteUser}>
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
