import {Router, Request, Response} from 'express';
import {BlogRepository} from "../repositories/blog-repository";
import {authMiddleware} from "../middlewares/auth/auth-middlewares";
import {blogValidation, nameValidation} from "../validators/blog-validator";

export const postRoute = Router({})

postRoute.get('/', (req, res) => {

    const blogs = BlogRepository.getAllBlogs()
    res.send(blogs)
})


postRoute.get('/:id', (req, res) => {
    const id = req.params.id
    const blog = BlogRepository.getBlogById(id)

    if (!blog) {
        res.sendStatus(404)

    }
    res.send(blog)
})

postRoute.post('/', authMiddleware, blogValidation(), (req: Request, res: Response) => {

    const id= req.params.id
    const blog = BlogRepository.getBlogById(id)

    const blogs = BlogRepository.getAllBlogs()
    if (!blog){
        res.sendStatus(404)
    }
    res.send(blogs)
})