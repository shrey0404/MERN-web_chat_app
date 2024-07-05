# MERN Chat Web App with Socket.IO

## Description

This is a real-time chat web application built using the MERN stack (MongoDB, Express, React, Node.js) with Socket.IO for WebSocket-based communication. It provides an interactive chatting experience with a user-friendly interface using React and ChakraUI.

## Features

- Real-time messaging using Socket.IO for WebSocket communication.
- User authentication and authorization.
- Responsive UI design with ChakraUI components.
- MongoDB Atlas for cloud database storage.
- RESTful API endpoints for handling chat messages and user data.

## Technologies Used

- **Frontend**: React, ChakraUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Real-time Communication**: Socket.IO


## Installation

1. Clone the repository:
    
    ```bash
    git clone <https://github.com/shrey0404/MERN-web_chat_app>

2.  Install dependencies for both frontend and backend:

    ```bash
    cd frontend && npm install
    ```

    ```bash
    cd ../backend && npm install
    ``` 
3. Configure environment variables:
- Create a `.env` file in the `server` directory for MongoDB connection string, JWT secret, etc.

4. Start the development servers:
- Frontend:
  ```
  cd client && npm start
  ```
- Backend:
  ```
  cd server && npm start
  ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

- Register or login to start chatting.
- Join chat rooms or create new ones.
- Send and receive messages in real-time.


