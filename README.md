# Wanderlust - Airbnb-inspired Full Stack Web Application

Wanderlust is a comprehensive full-stack web application developed using Node.js and Express, offering a user-friendly platform for property rentals. Embracing the MVC architecture, the project integrates a multitude of features to create a seamless and dynamic user experience.

## Features

1. **User Authentication and Authorization:**
   - Secure user authentication with signup and login functionalities.
   - Passport.js integration for robust user authentication.
   - Authorization checks to ensure access control where needed.

2. **Listing Management:**
   - Create, view, edit, and delete property listings.
   - Clean MVC structure for organized code and maintainability.
   - Implementation of RESTful routing principles.

3. **Review System:**
   - Users can leave reviews for listings.
   - Reviews can be created and deleted, enhancing user engagement and feedback.

4. **Category Filtering (Under Development):**
   - Work in progress for additional category filtering to enhance the browsing experience.
   - Ongoing development to include more refined search and categorization options.

5. **Geocoding and Maps Integration:**
   - Utilized geocoding to determine the location of each listing based on the address provided by the owner.
   - Integrated Mapbox SDK to display the location of listings on an interactive map.

## Technologies Used

- **Node.js and Express:**
  - Utilized for server-side development, handling routing, and managing the application's logic.

- **MongoDB and Mongoose:**
  - MongoDB as the database, with Mongoose providing an elegant object modeling solution.

- **Passport.js:**
  - Integrated for user authentication and session management.

- **Cloudinary:**
  - Cloudinary for efficient image storage and management.

- **Mapbox SDK:**
  - Integration for mapping features, enhancing the user experience.

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up your environment variables in a `.env` file. The following secrets are required:
   - `ATLASDB_URL`: MongoDB Atlas database URL.
   - `CLOUD_API_KEY`, `CLOUD_API_SECRET`, `CLOUD_NAME`: Cloudinary API credentials.
   - `MAP_TOKEN`: Mapbox API token.
   - `SECRET`: Secret key for sessions and authentication.

4. Run the application using `npm start`.

Feel free to explore and contribute to the Wanderlust project. For any issues or suggestions, please open an [issue](#https://github.com/Rish7087/Hotel-Booking-System-MERN-/issues).

Deployment
The application is deployed and accessible at [Wanderlust](#https://wanderlust-nug7.onrender.com/listings). Visit the link to explore the features and functionalities.

**Happy exploring with Wanderlust!**
