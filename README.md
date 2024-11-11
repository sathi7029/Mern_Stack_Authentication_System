# MERN Stack Authentication App

This is a MERN Stack Authentication application that enables user login, registration, and dashboard access. The frontend is built with React and Tailwind CSS, and the backend is powered by Node.js, Express, and MongoDB.

## Demo

You can check out the live demo [here](https://frontend-form-sr-final.onrender.com/).

## Features

- User registration and login
- Password encryption
- Dashboard access after successful login
- Responsive design with Tailwind CSS
- Environment-based base URL setup

## Technologies Used

### Frontend

- **React** with **Vite** for a fast development experience
- **Tailwind CSS** for styling

### Backend

- **Node.js** with **Express** for server logic and API routes
- **MongoDB** as the database to store user credentials

## Environment Variables

To run this project, set up the following environment variables:

### Frontend

In the frontend `.env` file, set the base URL:

```env
VITE_BASE_URL=<Your Backend URL>
