import {db} from "../db/db"
import {blogRoute} from "../routes/blog-route";
import {BlogModel} from "../models/blogs/output";

export class BlogRepository {
    static getAllBlogs() {
        return db.blogs
    }

    static getBlogById(id: string) {
        const blog = db.blogs.find((b: { id: string }) => b.id === id);
        if (!blog) {
            return null;
        }
        return blog;
    }

    static createBlog(creteBlog: BlogModel) {
        return db.blogs.push(creteBlog);

    }
}