import request from "supertest";
import {app} from "../src/settings";

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
