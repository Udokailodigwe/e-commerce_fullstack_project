import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { RootState } from "redux/store";
import { fetchUsersThunk } from "redux/services/user";
import AdminUser from "./AdminUser";
import EditUser from "./EditUser";

export default function AdminUsers() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useAppDispatch();
  const users = useAppSelector((state: RootState) => state.users.users);
  console.log("user", users);

  useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  return (
    <div>
      <EditUser currentId={currentId} setCurrentId={setCurrentId} />
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <AdminUser user={user} setCurrentId={setCurrentId} />
          </div>
        ))}
      </div>
    </div>
  );
}
