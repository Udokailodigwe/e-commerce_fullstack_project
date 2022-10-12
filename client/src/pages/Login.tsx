import React from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "redux/hooks";
import getTokenThunk from "redux/services/auth";

export default function Login() {
  const dispatch = useAppDispatch();

  const handleGoogleOnSuccess = async (response: CredentialResponse) => {
    console.log(response);
    if (response.credential) {
      dispatch(getTokenThunk(response));
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleGoogleOnSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
