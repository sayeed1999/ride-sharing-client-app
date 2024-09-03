import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";

export const getUserInfoFromToken = (token: string) => {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken;
}

// TODO: use jwt.verify and check expiry
export const validateToken = (token: string) => {
    if (token) return true;
    return false;
};
