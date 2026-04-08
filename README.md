# Workshop 05 - Building a REST API with Express and MongoDB

## Starter Notes

Before starting, prepare your repository workspace:
- Remove unnecessary content/files from the repository.
- Copy the full content of this `starter/` folder to the repository root.
- Continue the exercise from the repository root after the copy.

## Exercise Context
This exercise expands the previous exercises from this FullStack course. In this exercise, students will create a REST API to handle blog postings.
The student tasks are embedded directly into these files as TODOs:
- `server.js`
- `models/Post.js` (Model.js task)
- `routes/pages.js`
- `routes/posts.js`

## server.js Task (`connectToDatabase`)
In `server.js`, complete the `connectToDatabase` function so the app connects to MongoDB before starting the server.

## Model Task (`models/Post.js`)
In the model task, students must complete the `postSchema` definition for MongoDB using Mongoose. Define the post fields (`title`, `content`, `author`) with suitable validation rules (for example: `String`, `required: true`, and `trim: true`). Keep `timestamps: true` enabled so each document gets `createdAt` and `updatedAt` automatically. When this model is complete, the API routes can use it for create/read/update/delete operations and validation errors will be returned correctly during `POST` and `PUT` requests.



Implementation checklist:
- Verify that `process.env.MONGODB_URI` exists. If missing, show a clear warning/error.
- Call `mongoose.connect(process.env.MONGODB_URI, { dbName: 'blog' })`.
- Log a success message when the connection is established.
- Handle connection failures with `try/catch` and log the error message.
- Keep server startup behind `connectToDatabase().then(...)` so routes run after the connection step.

## Quick Start
1. Install dependencies with `npm install`
2. Create `.env` from `.env.example`
3. Start the server with `npm run dev`
4. Open `server.js`, `models/Post.js`, `routes/pages.js`, and `routes/posts.js`
5. Complete the TODO comments in order

## Browser Routes
- `GET /`
   - Purpose: Serve the home page (`index.html`).
   - Source file: `routes/pages.js`
   - Expected result: HTTP `200` + HTML page.

- `GET /about`
   - Purpose: Serve the about page (`about.html`).
   - Source file: `routes/pages.js`
   - Expected result: HTTP `200` + HTML page.

- `GET /contact`
   - Purpose: Serve the contact page (`contact.html`).
   - Source file: `routes/pages.js`
   - Expected result: HTTP `200` + HTML page.

- `GET /blog`
   - Purpose: Serve the blog page (`blog.html`) where API usage is demonstrated.
   - Source file: `routes/pages.js`
   - Expected result: HTTP `200` + HTML page.

If a browser route does not match any page route, the app should return your `404.html` file.

## API Routes
- `POST /api/posts`
   - Purpose: Create a new blog post document in MongoDB.
   - Request body: JSON with `title`, `content`, `author`.
   - Success: HTTP `201` + created post JSON.
   - Common errors: HTTP `400` for validation errors.

- `GET /api/posts`
   - Purpose: Fetch all posts.
   - Success: HTTP `200` + JSON array of posts.

- `GET /api/posts/:id`
   - Purpose: Fetch one post by MongoDB ObjectId.
   - Success: HTTP `200` + post JSON.
   - Common errors:
      - HTTP `400` when `:id` is not a valid ObjectId format.
      - HTTP `404` when no post exists with that id.

- `PUT /api/posts/:id`
   - Purpose: Replace/update one post by id.
   - Request body: full post fields (`title`, `content`, `author`).
   - Success: HTTP `200` + updated post JSON.
   - Common errors:
      - HTTP `400` invalid id or validation error.
      - HTTP `404` post not found.

- `DELETE /api/posts/:id`
   - Purpose: Remove one post by id.
   - Success: HTTP `200` + success message JSON.
   - Common errors:
      - HTTP `400` invalid id.
      - HTTP `404` post not found.

Tip for testing: Start with `POST`, then copy the returned `_id` and use it in `GET /:id`, `PUT /:id`, and `DELETE /:id`.

## Suggested Test Body
Use Postman to test all API routes after implementing the TODOs.

Recommended order in Postman:
1. `POST /api/posts` (create)
2. `GET /api/posts` (list)
3. `GET /api/posts/:id` (single)
4. `PUT /api/posts/:id` (update)
5. `DELETE /api/posts/:id` (remove)

Save the `_id` returned by `POST` and reuse it in `GET/PUT/DELETE` requests.

### Create Post (`POST /api/posts`)
```json
{
   "title": "My First Blog Post",
   "content": "This API stores blog posts in MongoDB.",
   "author": "Student"
}
```

### Update Post (`PUT /api/posts/:id`)
```json
{
   "title": "My First Blog Post (Updated)",
   "content": "Updated content from Postman test.",
   "author": "Student"
}
```

### Invalid Body Example (expect `400`)
```json
{
   "title": "",
   "content": "",
   "author": ""
}
```