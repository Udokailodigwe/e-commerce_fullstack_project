import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";

import { Users } from "types";

const URL = "http://localhost:4000/api/v1/login";

const getToken = async (response: CredentialResponse) => {
  try {
    const data = await axios.post(
      `${URL}`,
      {},
      {
        headers: {
          id_token: response.credential as string,
        },
      }
    );
    const res: { token: string; user: Users } = data.data;
    return { res };
  } catch (error) {
    throw error;
  }
};

export default getToken;
