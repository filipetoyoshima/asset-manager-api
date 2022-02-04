import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


const secret: jwt.Secret = 'secret'; // TODO: move to env

export const signJWT = (payload: object, options: object = {}): string => {
    return jwt.sign(payload, secret, { expiresIn: '1h', ...options });
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction): void => {
    try {
        if (!req.headers.authorization) {
            res.status(401).send('Unauthorized');
            return;
        }
        const [scheme, token] = req.headers.authorization.split(' ');
        if (scheme !== 'Bearer') {
            res.status(401).send('Invalid scheme');
            return;
        }
        if (!token) {
            res.status(401).send('Unauthorized');
            return;
        }
        const payload:any = jwt.verify(token, secret);
        req.user = payload.email;
        next();
    } catch (e) {
        res.status(401).send('Unauthorized');
    }
}