import {body} from "express-validator";

export const nameValidation = body('name')
    .isString().withMessage("Incorrect name")
    .trim()
    .isLength({min: 1, max: 15})
    .withMessage("Incorrect name!");


export const descriptionValidation = body('description')
    .isString()
    .trim()
    .isLength({min: 1, max: 500})
    .withMessage("Incorrect description!");



export const websiteUrlValidation = body('websiteUrl')
    .isString().withMessage("Incorrect name")
    .trim()

    .withMessage("Incorrect websiteUrl!");