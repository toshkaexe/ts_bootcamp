import {Router, Request, Response} from 'express';
import {BlogRepository} from "../repositories/blog-repository";
import {authMiddleware} from "../middlewares/auth-middlewares";
import {blogValidation, nameValidation} from "../validators/blog-validator";
import {PostRepository} from "../repositories/post-repository";
import {postValidation} from "../validators/post-validator";
import {BlogBody, RequestWithBody} from "../models/common";
import {randomUUID} from "crypto";
import {blogRoute} from "./blog-route";
import {CreatePostModel} from "../models/posts/input";

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

postRoute.post(
    '/',
    authMiddleware,
    postValidation(),
    (req: RequestWithBody<CreatePostModel>, res: Response) => {

        let {title,
            shortDescription,
            content,
            blogId} = req.body;

        const newPost = {
            id: randomUUID(),

            title: title,
            shortDescription: shortDescription,
            content: content,
            blogId: blogId,
            blogName: "blogName"
        }
        PostRepository.createPost(newPost);
        return res.send(201).send(newPost);
    });

postRoute.post('/ttt',
    authMiddleware,
    postValidation(), (req: Request, res: Response) => {

    const id= req.params.id
    const blog = PostRepository.getPostById(id)

    const blogs = PostRepository.getAllPosts()
    if (!blog){
        res.sendStatus(404)
    }
    res.send(blogs)
})