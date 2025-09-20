# About
API supporting CRUD operations with MongoDB with NodeJS and Express

This application can easily be configured up against a `local` as well as `cloud` MongoDB instance.

# Installation

1. Clone the repo with
    ```sh
    git clone https://github.com/yosang/node-mongodb
    ```

2. Install dependencies with
    ```sh
    npm install
    ```

3. Add environment variables
    ```sh
    cp .env.example .env
    ```

4. Start the server with

    ```sh
    npm start
    ```

# Usage
Endpoints available are:

- GET `/` - Retrieve last 5 documents.
- POST `/` - Create a new document.
- PUT `/:id` - Update a document by its id.
- DELETE `/:id` - Deletes a document by its id

# License
[MIT](https://choosealicense.com/licenses/mit/)