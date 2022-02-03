import jwt from "jsonwebtoken";

const secret = 'secret'; // TODO: move to env

export const signJWT = (payload: object, options: object = {}): string => {
    return jwt.sign(payload, secret, { expiresIn: '1h', ...options });
}