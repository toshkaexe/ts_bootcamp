import {Router, Request, Response} from 'express';
import {BlogRepository} from "../repositories/blog-repository";
import {authMiddleware} from "../middlewares/auth/auth-middlewares";
import {blogValidation, nameValidation} from "../validators/blog-validator";

export const testingRoute = Router({})