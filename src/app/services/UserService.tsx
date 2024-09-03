import { LoginPayload, LoginResponse } from "../models/login";

const login = async (data: LoginPayload) => {
  try {
    const response = await fetch("http://localhost:5000/auth-api/login/jwt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res: LoginResponse = await response.json();

    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default {
  login,
};
