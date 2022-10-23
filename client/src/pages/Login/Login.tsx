import React, { useState } from "react";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAppDispatch } from "redux/hooks";
import getTokenThunk from "redux/services/auth";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login() {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoogleOnSuccess = async (response: CredentialResponse) => {
    console.log(response);
    if (response.credential) {
      await dispatch(getTokenThunk(response));
    }
    navigate("/shop");
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="login">
      <button className="btn-modal" onClick={toggleModal}>
        LOGIN
      </button>

      {modal && (
        <>
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <GoogleLogin
              onSuccess={handleGoogleOnSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
