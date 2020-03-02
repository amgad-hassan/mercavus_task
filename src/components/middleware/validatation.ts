import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const validateBody = (validationSchema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = Joi.validate(req.body, validationSchema)

        if (error) return res.status(400).send(error.details[0].message);
        next();
    }
}





