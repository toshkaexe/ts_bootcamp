import {DBType} from "../models/db/db";

export const db:DBType = {
    blogs: [
        {
            id: "12345",
            name: "string",
            description: "test description",
            websiteUrl: "www.yandex.ru"
        }
    ],
    posts: [
        {
            id: "90",
            title: "test post title",
            shortDescription: "short test Description",
            content: "test content",
            blogId: "12345"
        }
    ]
}

