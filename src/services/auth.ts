import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


const secret: jwt.Secret = 'secret'; // TODO: move to env

export const signJWT = (payload: object, options: object = {}): string => {
    return jwt.sign(payload, secret, { expiresIn: '1h', ...options });
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction): void => {
    try {
        if (!req.headers.authorization) {
            res.status(401).send('Unauthorized, no token provided');
            return;
        }
        const [scheme, token] = req.headers.authorization.split(' ');
        if (scheme !== 'Bearer') {
            res.status(401).send('Invalid scheme');
            return;
        }
        if (!token) {
            res.status(401).send('Unauthorized, empty token');
            return;
        }
        const payload:any = jwt.verify(token, secret);
        req.user = payload.id;
        next();
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            res.status(401).send('Token expired');
            return;
        }
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).send('Invalid token');
            return;
        }
        console.error(e);
        res.status(500).send('Unexpected error');
    }
}