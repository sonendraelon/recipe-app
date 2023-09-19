#Recipe Application

#Backend

#This project is a backend API built with Node.js and Express.js that allows users to search for recipes and save their preferences. It integrates with the Spoonacular API to fetch recipe data based on user searches and uses OAuth for user registration and authentication. User preferences, such as saved recipes, are stored in a MongoDB database.

#Getting Started:

#To get started with this project, follow these steps:

I have Clone the repository to machine.
Navigated the project directory in your terminal.
Run npm install to install the necessary dependencies.
Run npm start to start the development server.


API Endpoints

This API includes the following RESTful endpoints:


GET /api/recipes: This endpoint returns a list of recipes based on the user's search query. It expects a q parameter in the query string, which should contain the user's search query. The endpoint integrates with the Spoonacular API to fetch recipe data.

POST /api/preferences: This endpoint allows users to save their preferences, such as their favorite recipes. It expects a JSON payload in the request body with the following fields: userId (the ID of the user), recipeId (the ID of the recipe), and preference (the type of preference, e.g. "favorite").

GET /api/preferences: This endpoint returns a list of the user's saved preferences. It expects a userId parameter in the query string, which should contain the ID of the user.


Authentication:

This API uses OAuth for user registration and authentication. Users can register and log in using their Google or Facebook accounts. Once a user is authenticated, their user ID is included in the JSON Web Token (JWT) that is returned to the client. This ID is used to associate preferences with the correct user.


Database:

This API uses MongoDB to store user preferences. When a user saves a preference, it is stored in a preferences collection in the database. Each preference document includes the user ID, recipe ID, and type of preference.


Security:

This API includes several security features to protect user data:
User authentication is handled using OAuth, which is a secure and widely-used authentication protocol.
User preferences are associated with user IDs, which are included in the JWT and verified on the server.
Input validation is used to prevent malicious input from being submitted to the server.




#Frontend

User Interface:


The user interface includes the following features:

A search bar that allows users to search for recipes using keywords or filters.

A list of search results that displays relevant recipe information, such as the title, image, and summary.

A recipe details page that displays additional information, such as ingredients, instructions, and nutritional information.

A "Save Recipe" button that allows users to save their favorite recipes.

A "My Recipes" page that displays the user's saved recipes.


Responsive Design:

The user interface is designed to be responsive and compatible with all major browsers. It includes media queries and other responsive design techniques to ensure that the application looks and functions correctly on all devices, including desktops, tablets, and mobile phones.

API Integration:

This application integrates with the backend API to fetch recipe data based on user searches and to save user preferences. The API endpoints are accessed using the fetch API and the data is displayed using React components.


Security
This application includes several security features to protect user data:
User authentication is handled by the backend API using OAuth, which is a secure and widely-used authentication protocol.
User preferences are associated with user IDs, which are verified on the server to prevent unauthorized access.
Input validation is used to prevent malicious input from being submitted to the server.
