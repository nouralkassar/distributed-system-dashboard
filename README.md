# Distributed System Dashboard

## Overview

This project is a simple distributed system monitoring dashboard built using Node.js, Express, Socket.IO, and React.

The application demonstrates real-time communication between a server and multiple connected clients. The server continuously broadcasts system information such as active node count, system status, and heartbeat updates, while the frontend dashboard displays these metrics in real time.

---

## Features

* Real-time communication using Socket.IO
* Live monitoring of connected nodes
* Dynamic system health updates
* Heartbeat tracking
* Interactive dashboard interface
* Automatic synchronization between server and clients

---

## Technologies Used

### Backend

* Node.js
* Express.js
* Socket.IO
* CORS

### Frontend

* React.js
* Socket.IO Client

---

## Project Structure

project-root/

├── backend/

│ └── server.js

├── frontend/

│ └── src/

│ └── App.jsx

└── README.md

---

## Installation

### Clone the Repository

git clone <repository-url>

cd distributed-system-dashboard

### Install Backend Dependencies

cd backend

npm install

### Install Frontend Dependencies

cd ../frontend

npm install

---

## Running the Application

### Start Backend Server

cd backend

node server.js

Server runs on:

http://localhost:3000

### Start Frontend

cd frontend

npm run dev

Frontend runs on:

http://localhost:5173

---

## System Metrics

The server broadcasts:

* Active Nodes Count
* System Health Status
* Heartbeat Timestamp
* Load Index

These metrics are displayed and updated automatically on the dashboard.

---

## Educational Purpose

This project was developed as part of a Distributed Systems course to demonstrate real-time state synchronization and client-server communication using WebSockets.
