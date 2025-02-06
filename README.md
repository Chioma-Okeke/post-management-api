# Post Management API

Welcome to the **Post Management API**! 🚀

This API provides seamless user and post management functionalities. With this, users can create accounts, manage their profiles, and publish engaging posts. Authentication is required for protected endpoints to ensure security.

## Features 📌

- **User Account Management**
  - Register a new user 🆕
  - Delete a user ❌ (Protected)
  - Update user details ✏️ (Protected)
  - Get a single user's details 👤 
- **Post Management**
  - Create a post 📝 (Protected)
  - Delete a post 🗑️ (Protected)
  - Update a post 🔄 (Protected)
  - Get all posts 📜
  - Get a specific post 🔍

---

## API Endpoints 🛠️

### User Account APIs

| Method   | Endpoint      | Description                                         |
| -------- | ------------- | --------------------------------------------------- |
| `POST`   | `/users`      | **(Admin Only)** Create a new user manually         |
| `DELETE` | `/users/{id}` | Delete a user (Protected)                           |
| `PUT`    | `/users/{id}` | Update user details (Protected)                     |
| `GET`    | `/users/{id}` | Get a single user                                   |

### User's Post APIs

| Method   | Endpoint      | Description                   |
| -------- | ------------- | ----------------------------- |
| `POST`   | `/posts`      | Create a new post (Protected) |
| `DELETE` | `/posts/{id}` | Delete a post (Protected)     |
| `PUT`    | `/posts/{id}` | Update a post (Protected)     |
| `GET`    | `/posts`      | Get all posts                 |
| `GET`    | `/posts/{id}` | Get a specific post           |

---

## Authentication 🔐

This API uses authentication to secure protected endpoints. Users must log in to receive a token, which must be included in the request headers for authorized actions.

### Authentication Endpoints

| Method | Endpoint         | Description                      |
| ------ | ---------------- | -------------------------------- |
| `POST` | `/auth/register` | Register a new user              |
| `POST` | `/auth/login`    | Authenticate and receive a token |
| `POST` | `/auth/logout`    | Logout a user                   |


---

## Getting Started 🚀

### Prerequisites

Make sure you have the following installed:

- **Node.js** & **Express.js** (if using JavaScript/Node backend)
- **MongoDB / PostgreSQL** (or any database of choice)
- **Postman / cURL** (for testing API endpoints)

### Installation & Setup ⚙️

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/post-management-api.git
   cd post-management-api
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Configure environment variables (e.g., database URL, JWT secret, port, etc.).
4. Start the server:
   ```sh
   npm start
   ```
