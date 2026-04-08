# Workshop 05 - Requirements

## Overview
This document describes the tasks and requirements for Workshop 05 - Building a REST API with Express and MongoDB.

Complete all mandatory tasks. Optional tasks are provided for additional practice.

---

## General Rules
- Work only inside the `starter/` folder
- Do not commit `node_modules` or `.env`
- Commit your work regularly with meaningful commit messages
- Use Express and Mongoose for the implementation
- Keep API responses in JSON format
- Define routes using Express Router files in the `routes/` folder

---

## Environment Setup

### Create a `.env` file
Create a `.env` file in the `starter/` folder using `.env.example` as a template.

Example:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog
PORT=3000
```

Atlas target for this workshop:
- Database: `blog`
- Collection: `posts`

---

## Mandatory Tasks

### Task 1 - Setup Express and MongoDB
**Description**
Prepare the starter application so it can serve pages and connect to MongoDB.

**Requirements**
- Install required dependencies
- Load environment variables using `dotenv`
- Create an Express application instance
- Enable JSON body parsing with `express.json()`
- Connect to MongoDB using Mongoose
- Define the port using `process.env.PORT || 3000`

---

### Task 2 - Add the Page Routes
**Description**
Keep the familiar page routes and add a new `/blog` route.

**Requirements**
- Create or complete `routes/pages.js`
- Create a GET route for `/`
- Create a GET route for `/about`
- Create a GET route for `/contact`
- Create a GET route for `/blog`
- Use `res.sendFile()` with files from the `public/` folder
- Mount the page router in `server.js`

**Expected Outcome**
- The browser routes should load HTML pages correctly

---

### Task 3 - Create the Post Model
**Description**
Define a Mongoose model for blog posts.

**Requirements**
- Create or complete `models/Post.js`
- Add at least these fields:
  - `title` (String, required)
  - `content` (String, required)
  - one additional field of your choice
- Export the model

**Suggested Additional Fields**
- `author`
- `category`
- `tags`

---

### Task 4 - Implement Create Operation
**Description**
Create a REST endpoint for adding a new blog post.

**Requirements**
- Create or complete `routes/posts.js`
- Implement `POST /api/posts`
- Read request data from `req.body`
- Save the document to MongoDB
- Return the created post as JSON
- Handle validation or server errors appropriately

**Example Test**
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"First Post","content":"Hello REST API","author":"Student"}'
```

---

### Task 5 - Implement Read Operations
**Description**
Create endpoints for fetching blog posts.

**Requirements**
- Implement `GET /api/posts` to return all posts
- Implement `GET /api/posts/:id` to return a single post
- Return `404` if the post is not found
- Return `400` for invalid MongoDB ObjectIds

---

### Task 6 - Implement Update and Delete Operations
**Description**
Complete the REST API with update and delete functionality.

**Requirements**
- Implement `PUT /api/posts/:id`
- Implement `DELETE /api/posts/:id`
- Return proper status codes
- Return the updated document or a success message

---

### Task 7 - Add Error Handling and Start the Server
**Description**
Finish the application flow with proper error handling and startup logic.

**Requirements**
- Add a 404 handler for unmatched routes
- Add a 500 handler for server errors
- Start the Express app with `app.listen()`
- Log a helpful startup message with available routes

---

## Validation / Acceptance Criteria
Your solution will be considered complete if:
- The server starts without syntax errors
- MongoDB connection works
- All page routes work as expected
- CRUD endpoints are implemented and tested
- API responses use JSON
- Proper status codes are returned for success and error cases
- No unnecessary files are committed

---

## Optional Tasks (Bonus)
- Add request logging middleware
- Add pagination to `GET /api/posts`
- Add filtering by author or category
- Add schema validation rules such as `minlength`
- Create a Postman collection for all routes

---

## Submission Checklist
- [ ] All mandatory tasks are completed
- [ ] Application starts successfully
- [ ] Page routes load correctly
- [ ] CRUD endpoints work correctly
- [ ] MongoDB data is persisted
- [ ] Code is pushed to GitHub
- [ ] Repository does not contain `node_modules`
- [ ] Repository does not contain `.env`

---

## Notes
- `/blog` is a page route for users in the browser
- `/api/posts` is a resource route for REST operations
- Keep those two concepts clearly separated in your implementation
- Keep route definitions in the `routes/` folder and mount them from `server.js`
- Ask questions if any requirement is unclear