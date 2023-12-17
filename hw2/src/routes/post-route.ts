import {Router, Request, Response} from 'express';
import {BlogRepository} from "../repositories/blog-repository";
import {authMiddleware} from "../middlewares/auth-middlewares";
import {blogValidation, nameValidation} from "../validators/blog-validator";
import {PostRepository} from "../repositories/post-repository";

export const postRoute = Router({})

postRoute.get('/', (req, res) => {

    const blogs = PostRepository.getAllPosts()
    res.send(blogs)
})


postRoute.get('/:id', (req, res) => {
    const id = req.params.id
    const blog = PostRepository.getPostById(id)

    if (!blog) {
        res.sendStatus(404)

    }
    res.send(blog)
})

postRoute.post('/', authMiddleware, blogValidation(), (req: Request, res: Response) => {

    const id= req.params.id
    const blog = PostRepository.getPostById(id)

    const blogs = PostRepository.getAllPosts()
    if (!blog){
        res.sendStatus(404)
    }
    res.send(blogs)
})