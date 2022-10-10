import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const handleGoogleOnSuccess = (response: any) => {
    console.log(response);
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
