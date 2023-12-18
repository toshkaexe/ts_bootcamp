import request from "supertest";
import {app} from "../src/settings";

import 'dotenv/config';

describe("/testing", () => {
    beforeAll(async () => {
        await request(app).delete("/testing/all-data").expect(204);
    });

    it("Get status 200 and found empty array of blogs, posts", async () => {
        await request(app).get("/blogs").expect(200, []);
        await request(app).get("/posts").expect(200, []);
    })


    it("GET Blogs with no authorisation", async () => {
        await request(app).get("/blogs").expect(200, []);

    })

        it('POST new Blog', async () => {
            const newBlog = {
                name: 'Test Blog',
                description: 'This is a test blog',
                websiteUrl: 'https://example.com',
            };

            const response = await request(app)
                .post('/blogs')
                .send(newBlog)
                .auth("admin", "qwerty");

            expect(response.status).toBe(201);

        });

    /*       it('PUT blog', async () => {
           const updatedBlog = {
               name: 'Updated Test Blog',
               description: 'This is an updated test blog',
               websiteUrl: 'https://updated-example.com',
           };
           const blogId = 1;
           const response = await request(blogRoute)
               .put(`${blogId}`) // replace with an actual blog ID
               .send(updatedBlog)
               .auth("admin", "qwerty");
           expect(response.status).toBe(204);

       });

       it('DELETE blog by Id', async () => {
           const response = await request(blogRoute)
               .delete('12345') // replace with an actual blog ID
               .auth("admin", "qwerty");
           expect(response.status).toBe(204);
           // Add more assertions as needed
       });
   */
   /* it('- POST with incorrect name,description and webSite',
        async () => {

            await request(app).get("/blogs")
                .auth("admin", "qwerty")
                .send({name: '', description: {}, websiteUrl: 'bad'})
                .expect(400, {
                    errorsMessages: [
                        {message: 'Invalid name', field: 'name'},
                        {message: 'Invalid description', field: 'description'},
                        {message: 'Invalid description', field: 'websiteUrl'}

                    ]
                })
        })
*/

})
