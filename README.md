# Product Catalog Management System

A full-stack Product Catalog Management System built with **Django REST Framework**, **React**, **PostgreSQL**, and **Docker**.

## Features

* JWT Authentication
* Product CRUD Operations
* Category Management
* Product Search
* Pagination
* Protected Routes
* REST API Documentation
* Dockerized Frontend, Backend and PostgreSQL
* PostgreSQL Database Backup & Restore

---

## Tech Stack

### Backend

* Django
* Django REST Framework
* PostgreSQL
* JWT Authentication
* Django Filters

### Frontend

* React
* React Router
* Axios
* Vite

### DevOps

* Docker
* Docker Compose

---

## Project Structure

```
DJANGO + REACT
│
├── docker-compose.yml
├── .env.example
├── README.md
│
├── productcatlogapp
│   ├── ProductCatalogAPI
│   ├── catalog
│   ├── requirements.txt
│   └── Dockerfile
│
└── product-catalog-react
    ├── src
    ├── package.json
    └── Dockerfile
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate

```bash
cd <repository-folder>
```

### Create Environment File

Create a `.env` file using `.env.example`.

### Run Docker

```bash
docker compose up --build
```

---

## Services

| Service    | Port |
| ---------- | ---- |
| React      | 5173 |
| Django     | 8000 |
| PostgreSQL | 5435 |

---

## API Endpoints

### Authentication

```
POST /api/token/
```

### Categories

```
GET /api/categories/
POST /api/categories/
```

### Products

```
GET /api/products/
POST /api/products/
PUT /api/products/{id}/
DELETE /api/products/{id}/
```

---

## Docker Architecture

```
Docker Compose
│
├── Frontend (React)
├── Backend (Django)
└── PostgreSQL
        │
        ▼
Docker Volume
```

---

## Future Improvements

* Environment Variable Management
* CI/CD Pipeline
* Deployment on Render
* Frontend Deployment on Netlify
* Nginx Reverse Proxy
* HTTPS Support
* Automated Testing

---

## Author

Om Shende
