import {Router, Request, Response} from 'express';
import {BlogRepository} from "../repositories/blog-repository";

const blogRoute = Router({})

blogRoute.get('/', (req, res) => {

    const blogs = BlogRepository.getAllBlogs()
    res.send(blogs)
})


blogRoute.get('/:id', (req, res) => {
    const id = +req.params.id
    const blog = BlogRepository.getBlogById(id)

    if (!blog) {
        res.sendStatus(404)

    }
    res.send(blog)
})

blogRoute.post('/', (req, res) => {

    const blogs = BlogRepository.getAllBlogs()
    res.send(blogs)
})