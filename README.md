# User Authentication App

This is a full-stack React app with Node.js backend and MySQL database for user signup and login.

## Setup

1. Ensure Node.js is installed.
2. Install MySQL and start the MySQL service.
3. Create a database named `userdb`:
   - Open MySQL command line or a client like phpMyAdmin.
   - Run: `CREATE DATABASE userdb;`
4. If your MySQL root user has a password, update `server/index.js` in the dbConfig object.

## Running the App

1. Start the backend server:
   ```
   cd server
   npm install
   npm start
   ```
2. Start the React app:
   ```
   npm install
   npm start
   ```
3. Open http://localhost:3000 in your browser.

## Features

- Signup: Create a new account.
- Login: Log in with email and password.
- View Users: After login, go to /users to see all registered users.

## Viewing Data

You can view the stored user data in the MySQL database using a MySQL client or by accessing the /users endpoint in the app.
