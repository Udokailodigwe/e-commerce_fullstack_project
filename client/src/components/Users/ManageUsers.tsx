import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { fetchUsersThunk } from "redux/services/user";
import ManageUser from "./ManageUser";
import EditUser from "./EditUser";
import { Col, Row } from "react-bootstrap";

export default function ManageUsers() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.users.users);
  console.log("user", users);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <Row>
      <Col className="user_dashboard" sm={12} md={4}>
        <EditUser currentId={currentId} setCurrentId={setCurrentId} />
      </Col>
      <Col className="user_dashboard" sm={12} md={7}>
        {users.map((user) => (
          <div key={user._id}>
            <ManageUser user={user} setCurrentId={setCurrentId} />
          </div>
        ))}
      </Col>
    </Row>
  );
}
