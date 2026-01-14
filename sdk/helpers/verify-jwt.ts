import jwt from "jsonwebtoken";

export const verifyJwt = (token: string|null,secretKey:string) => {
    if(!token) return null;
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        return null;
    }
};