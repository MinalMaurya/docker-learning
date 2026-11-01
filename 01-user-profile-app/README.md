# User Profile App

A simple full-stack web application built using Node.js, Express.js, and MongoDB. It allows users to view and update their profile information through a browser-based interface.

This project is part of my hands-on journey of learning Docker and containerization.

## Features

- View user profile information
- Update name, email, and bio
- Store profile data in MongoDB
- Manage the database using Mongo Express

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Database Administration:** Mongo Express
- **Containerization:** Docker
- **Multi-container Management:** Docker Compose

## Project Structure

```text
01-user-profile-app/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server.js
├── package.json
├── package-lock.json
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Node.js and npm
- Docker Desktop
- Git

## Running the Project

### 1. Start Docker Desktop

Make sure Docker Desktop is running.

### 2. Start the database services

From the project directory:

```bash
docker compose up -d
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the backend

```bash
npm start
```

## Application URLs

- **User Profile App:** http://localhost:3000
- **Mongo Express:** http://localhost:8081

## Docker Concepts Practised

- Running MongoDB in a Docker container
- Connecting services through a Docker network
- Using Docker volumes for database persistence
- Managing multiple containers
- Introduction to Docker Compose

## Current Setup

The Node.js backend currently runs directly on the host machine, while MongoDB and Mongo Express run inside Docker containers.

The backend connects to MongoDB through the exposed host port.

## Learning Objectives

Understand how applications interact with containerized services and explore Docker networking, storage, and multi-container management through a practical project.
