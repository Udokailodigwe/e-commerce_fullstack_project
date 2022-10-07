import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { fetchUsersThunk } from "redux/services/user";
import { RootState } from "redux/store";
import { Users } from "types";

export default function User() {
  const { userId } = useParams() as { userId: string };
  const dispatch = useAppDispatch();

  const user: Users | undefined = useAppSelector((state: RootState) =>
    state.users.users.find((user) => user._id === userId)
  );
  useEffect(() => {
    // if (user.length === 0) {
    dispatch(fetchUsersThunk());
    // }
  }, [dispatch]);

  if (!user) return <h1>Loading user</h1>;

  return (
    <div>
      <ul>
        <li>
          {user.firstName}, {user.email}
        </li>
      </ul>
    </div>
  );
}
