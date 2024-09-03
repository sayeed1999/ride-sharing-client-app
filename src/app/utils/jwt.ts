import { jwtDecode } from "jwt-decode";

export const getUserInfoFromToken = (token: string) => {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken;
}
