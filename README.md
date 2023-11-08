# React Application with Vite

- This is a React application built using Vite. It consists of several components for a user management system, including a landing page, registration page, and a form page with filtering capabilities.

## Getting Started

To run this application, you need to have Node.js and npm (Node Package Manager) installed on your system.

1. **Clone the repository:**

   - ```bash
     git clone <repository-url>
     cd <project-directory>
     ```

   - Replace `<repository-url>` with the URL of project's Git repository and `<project-directory>` with the project directory name.

2. **Install Dependencies:**

   - In the project directory, run the following command to install the required dependencies:

   - ```bash
     npm install
     ```

3. **Run the Application:**

   - To start the development server and run the application, use the following command:

   - ```bash
     npm run dev
     ```

   - This will start the development server and open the application in your default web browser. You can access it at [http://localhost:3000](http://localhost:3000).

## Application Structure

- `src` directory contains the React components, CSS files, and assets used in the application.
- `src/assets` contains image assets used in the application.
- `src/components` contains React components for different parts of the application.
- `src/styling` contains CSS files for styling the application.
- `src/data.jsx` contains sample user data for the application.

## Libraries Used

- **React** - A JavaScript library for building user interfaces. React is used for creating the frontend of this application. [Learn more about React](https://reactjs.org/).

- **Vite** - A fast build tool and development server for modern web development. Vite is used to build and serve this React application. [Learn more about Vite](https://vitejs.dev/).

- **React Router DOM** - A library for handling routing in React applications. It's used for navigation between different pages in this application. [Learn more about React Router DOM](https://reactrouter.com/web/guides/quick-start).

- **PropTypes** - A library for type-checking React components' props. PropTypes are used to specify the expected data types of props passed to components. [Learn more about PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html).

## Usage on local

- **Landing Page**: Access the landing page at [http://localhost:3000](http://localhost:3000).
- **Registration Page**: Click on the "Get Started" button on the landing page or navigate to [http://localhost:3000/registration](http://localhost:3000/registration).
- **Form Page**: After successful registration, you can access the form page and use following data table as your needs.
- **API Page**: On this page, you can access data provided by API and use pagination feature to paginate between information

## Features

- User registration with photo upload.
- Filtering users based on status and gender on the form page.
- Pagination for displaying a limited number of users per page.

## Customization

- Feel free to customize this application according to your needs. You can modify the components, styles, and add more features as required.

## License

- This project is open-source and available for everyone.
