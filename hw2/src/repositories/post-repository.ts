import {db} from "../db/db"
import {blogRoute} from "../routes/blog-route";
import {BlogModel} from "../models/blogs/output";
import {PostModel} from "../models/posts/output";

export class PostRepository {
    static getAllPosts() {
        return db.posts
    }

    static getPostById(id: string) {
        const post = db.blogs.find((b) => b.id === id);
        if (!post) {
            return null;
        }
        return post;
    }

    static createBlog(cretePost: PostModel) {
        return db.posts.push(cretePost);

    }
}