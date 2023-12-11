//то, что приходит от клиента

export type CreatePostModel = {
    title: string,
    shortDescriptions: string,
    content: string,
    blogId: string
}

export type UpdatePostModel = {
    title: string,
    shortDescriptions: string,
    content: string,
    blogId: string
}