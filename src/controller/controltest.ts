import express from 'express';

interface ReqBody {
    value: number;
}

interface CustomRequest<T> extends express.Request {
    body: T;
}

export const controlTest = (
    req: CustomRequest<ReqBody>,
    res: express.Response
): void => {
    const { value } = req.body;
    const returnValue = value * 2;
    res.status(200).send({
        twice: returnValue,
    });
}