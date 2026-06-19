# ElectroMart - Full Stack E-Commerce Platform

ElectroMart is a modern full-stack e-commerce application built using React, Spring Boot, PostgreSQL, and REST APIs. The platform provides a seamless shopping experience with product browsing, category filtering, search functionality, shopping cart management, and backend database integration.

---

## Features

### Frontend

- Modern React + Vite interface
- Product catalog display
- Category-based filtering
- Real-time product search
- Shopping cart functionality
- Responsive and clean UI design
- Deal badges for featured products

### Backend

- Spring Boot REST API
- PostgreSQL database integration
- JPA / Hibernate ORM
- Product repository layer
- RESTful controller architecture

### Database

- PostgreSQL relational database
- Product data storage and retrieval
- Persistent backend integration

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- CSS3

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Maven

### Database

- PostgreSQL

---

## Project Structure

```text
electromart
│
├── backend
│   ├── src/main/java/com/electromart/backend
│   │   ├── controller
│   │   ├── model
│   │   ├── repository
│   │   └── BackendApplication.java
│   │
│   └── src/main/resources
│       └── application.properties
│
├── public
│
├── src
│   ├── assets
│   ├── App.jsx
│   ├── ProductCard.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## API Endpoint

### Get All Products

```http
GET /products
```

Returns all products stored in the PostgreSQL database.

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Pranith-CM/Electromart-e-commerce.git
cd Electromart-e-commerce
```

### Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend Setup

```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

## Current Functionality

- Product listing from PostgreSQL
- Category filtering
- Product search
- Shopping cart management
- Featured deal products
- REST API integration
- Responsive UI

---

## Future Enhancements

- User Authentication
- Product Reviews & Ratings
- Wishlist Functionality
- Order Management
- Payment Gateway Integration
- Admin Dashboard
- Inventory Management
- Order Tracking

---

## Author

**C. M. Pranith**

---

## License

This project was developed for academic, learning, and portfolio purposes.