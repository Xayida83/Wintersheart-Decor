# Wintersheart Decor 
GITHUB: https://github.com/Xayida83/Wintersheart-Decor
/Charlotta Lindberg
## BACKEND
The backend for the Wintersheart Decor project, built as a learning-focused implementation of an API using Node.js, following the MVC (Model-View-Controller) design pattern. The primary goal is to simulate working with a real API while reinforcing best practices for backend development.  
___
### Project Purpose
The backend was developed with the following goals:

**1. Simulating a real API:**

  - I used JSON-server to mock a RESTful API, making it possible to perform CRUD operations and replicate interactions with a live backend service.
  - While this is not a fully-fledged backend, it effectively mimics the behavior of an API, making it suitable for learning and frontend integration.

**2. Learning MVC Design Pattern:**

  - To reinforce separation of concerns, we structured the backend using the MVC pattern:
    - Models: Define the structure of the data sent to the frontend.
    - Controllers: Handle the business logic and interaction with the data.
    - Routes: Define the API endpoints and link them to the appropriate controllers.

  **3. Practicing Best Practices:**

  - Middleware, such as cors and express.json, is included to handle JSON parsing and avoid cross-origin issues.
  - .env files are used for managing environment variables, even though they are not strictly necessary for such a small-scale project.
___
### Project Features
**1. Mock API**

I use JSON-server to simulate API interactions. The data is stored in a db.json file, and the API endpoints allow us to:

  - Fetch all products.
  - Fetch a product by its ID.

**2. MVC Architecture**

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

**3. Middleware**

The following middleware is used:

  - express.json(): Parses incoming JSON requests.
  - cors: Handles cross-origin requests, allowing frontend applications to interact with the backend.
    
**4. Environment Variables**

The dotenv package is used to manage environment variables, such as: 

- JSON_SERVER_BASE_URL: The base URL for the mock API.
- PORT: The port on which the backend server runs.

___
### Why JSON-Server?
I chose JSON-server to mock the backend API for the following reasons:

- Simple Setup: It provides a quick and effective way to simulate an API without needing a full database or complex setup.
- Frontend Integration: The mock API mimics the behavior of a real API, allowing frontend developers to work seamlessly as if they were connected to a live backend.
- Learning Purpose: This approach helps learners understand API interactions and the importance of structuring backend data for frontend consumption.

___
### Why MVC?
Even though this is a small-scale project, implementing the MVC pattern provides:

- Separation of Concerns: Each layer has a distinct responsibility, making the code more organized and easier to maintain.
- Scalability: The project structure can be extended easily for larger applications.
- Best Practices: Adopting MVC reinforces good development habits.

___
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

___
### Next Steps
- Integrate a database (e.g., SQLite or MongoDB) for a more realistic backend.
- Add full CRUD operations (Create, Update, Delete) for products.
- Implement authentication for secured routes.

## FRONTEND

The frontend for the Wintersheart Decor project is built using React and TypeScript, designed with a focus on modularity and testability. The application interacts with a backend API to fetch and display products, offering functionality like viewing product details and managing a shopping cart.
___
### Project Purpose
The frontend was developed with the following goals:

**1. Modular and Scalable Design:**
  - Components are designed to be reusable and context-agnostic, ensuring that they can be easily extended for additional features.
    
**2. Integration with a Mock Backend:**
  - The frontend consumes a JSON-server-powered backend API to simulate real-world API interactions.
    
**3. Focus on Test-Driven Development (TDD):**
  - At least two components are rigorously tested using Vitest and React Testing Library to ensure functionality and reliability.
    
**4. Responsive and Accessible Design:**
  - The application is styled using CSS modules to provide a clean and consistent look across devices, ensuring a responsive design for both mobile and desktop users.
___
### Key Features
**1. Home Page**
  - Displays a list of all products fetched from the backend.
  - Each product is shown as a card with an image, name, and price.
  - Clicking on a product navigates to its detailed view.
    
**2. Product Details Page**
  - Shows detailed information about a selected product, including its description, stock availability, and price.
  - Includes an "Add to Cart" button that updates the cart state.
    
**3. Shopping Cart**
  - Displays all the items added to the cart.
  - Shows total price and quantity for each item.
  - Allows users to remove items or clear the cart entirely.
    
**4. Navbar**
  - Provides navigation links to the home page and cart.
  - Dynamically updates the cart count, showing the total number of items in the cart.
    
**5. Utilities for API Integration**
  - A shared fetchData utility function simplifies API calls with error handling and consistent configuration.

**6. Context API for Global State Management**
  - Cart state is managed globally using the React Context API, making it accessible across components without prop drilling.
___
### Start frontend

```bash
cd frontend
```

Start the Development Server Run the following command to start the application:
```bash
npm run dev
```

Run Tests Test the application components:
```bash
npm run test
```
___
### Testing and TDD
#### Tested Components
**ListComponent**
  - Ensures that a list of products is rendered correctly.
  - Tests how the component handles empty product lists.
    
**CartItemList**
  - Verifies that cart items are displayed accurately with their quantity and total price.
  - Tests the "Remove" button functionality to ensure items are correctly removed from the cart.
    
**Testing Tools**
  - Vitest: Used for running tests.
  - React Testing Library: Used for simulating user interactions and testing DOM output.

___
### Next Steps
**1. Enhance Product Filtering and Sorting**
  - Add functionality for users to filter products by category or price range.
    
**2. Add Checkout Functionality**
  - Implement a "Place Order" button that redirects to a mock checkout page.
    
**3. Improve Test Coverage**
  - Add tests for all core components, including edge cases and error handling.
    
**4. Accessibility Improvements**
  - Ensure the application adheres to WCAG guidelines for accessibility.
    
**5. Deploy Application**
  - Host the frontend on a platform like Netlify or Vercel and connect it to the backend.

With this frontend structure and functionality, Wintersheart Decor provides a clean and user-friendly shopping experience while offering a scalable foundation for future development. 🎄

