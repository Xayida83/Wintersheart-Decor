# Wintersheart Decor Backend
The backend for the Wintersheart Decor project, built as a learning-focused implementation of an API using Node.js, following the MVC (Model-View-Controller) design pattern. The primary goal is to simulate working with a real API while reinforcing best practices for backend development.


## Project Purpose
The backend was developed with the following goals:

1. Simulating a real API:

- I used JSON-server to mock a RESTful API, making it possible to perform CRUD operations and replicate interactions with a live backend service.
- While this is not a fully-fledged backend, it effectively mimics the behavior of an API, making it suitable for learning and frontend integration.

2. Learning MVC Design Pattern:

- To reinforce separation of concerns, we structured the backend using the MVC pattern:
  - Models: Define the structure of the data sent to the frontend.
  - Controllers: Handle the business logic and interaction with the data.
  - Routes: Define the API endpoints and link them to the appropriate controllers.

3. Practicing Best Practices:

- Middleware, such as cors and express.json, is included to handle JSON parsing and avoid cross-origin issues.
- .env files are used for managing environment variables, even though they are not strictly necessary for such a small-scale project.

## Project Features
1. **Mock API**
We use JSON-server to simulate API interactions. The data is stored in a db.json file, and the API endpoints allow us to:

- Fetch all products.
- Fetch a product by its ID.

2. **MVC Architecture**
The backend is divided into the following layers:

- Models:
  - Define the data structure for products.
  - Examples:
    - ProductsModel: Used for fetching all products.
    - ItemModel: Used for fetching detailed information about a single product.
  - Controllers:
    - Contain the logic for fetching and transforming data from the mock API.
    - Example: listProducts and getProductById handle fetching products and single product details, respectively.
  - Routes:
    - Define API endpoints and link them to the appropriate controllers.
  - Example:
    - /api/products: Fetch all products.
    - /api/products/:id: Fetch a product by its ID.
3. **Middleware**
The following middleware is used:

- express.json(): Parses incoming JSON requests.
- cors: Handles cross-origin requests, allowing frontend applications to interact with the backend.
4. **Environment Variables**
The dotenv package is used to manage environment variables, such as:

JSON_SERVER_BASE_URL: The base URL for the mock API.
PORT: The port on which the backend server runs.


## Why JSON-Server?
We chose JSON-server to mock the backend API for the following reasons:

- Simple Setup: It provides a quick and effective way to simulate an API without needing a full database or complex setup.
- Frontend Integration: The mock API mimics the behavior of a real API, allowing frontend developers to work seamlessly as if they were connected to a live backend.
- Learning Purpose: This approach helps learners understand API interactions and the importance of structuring backend data for frontend consumption.


## Why MVC?
Even though this is a small-scale project, implementing the MVC pattern provides:

- Separation of Concerns: Each layer has a distinct responsibility, making the code more organized and easier to maintain.
- Scalability: The project structure can be extended easily for larger applications.
- Best Practices: Adopting MVC reinforces good development habits.


### Setup Instructions
1. Install Dependencies
Run the following command to install necessary packages:

``` bash
npm install
```
2. Start JSON-Server
Run the mock API on port 3000:

```bash
npm run db-start
```

3. Start Backend Server
Run the backend server:

```bash
npm run dev
```
4. Test API Endpoints
The API is available at:

Fetch all products:
```bash
GET http://localhost:5010/api/products
```
Fetch a product by ID:
```bash
GET http://localhost:5010/api/products/1
```


Next Steps
- Integrate a database (e.g., SQLite or MongoDB) for a more realistic backend.
- Add full CRUD operations (Create, Update, Delete) for products.
- Implement authentication for secured routes.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
