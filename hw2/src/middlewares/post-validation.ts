import {body} from "express-validator";
import {BlogRepository} from "../repositories/blog-repository";
import {inputValidation} from "./input-validation";

const blogIdValidation = body("blogId")
    .isString()
    .trim()
    .custom((value) => {
        const blog = BlogRepository.getBlogById(value);
        if (!blog) {
            return false;
        } else {
            return true;
        }
    })
    .withMessage("Incorrect blogId");

const titleValidation = body("title")
    .isString()
    .trim()
    .isLength({min: 5, max: 100})
    .withMessage("Incorrect title!");

const contentValidation = body("content")
    .isString()
    .trim()
    .isLength({min: 5, max: 1000})
    .withMessage("Incorrect short content!");


const shortDescriptionValidation = body("shortDescription")
    .isString()
    .trim()
    .isLength({min: 5, max: 100})
    .withMessage("Incorrect short description!");


export const postValidation = () => [
    blogIdValidation,
    titleValidation,
    shortDescriptionValidation,
    contentValidation,
    inputValidation,
];