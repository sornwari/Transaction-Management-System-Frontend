# Transaction Management System Frontend

This is the frontend application for the Transaction Management System. It provides a user interface for managing transactions.

## Features

- User authentication and authorization
- Dashboard
- User creation, editing, and deletion
- User reporting
- Account creation, editing, and deletion
- Account reporting
- Transaction creation, editing, and deletion
- Transaction history and reporting

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sornwari/Transaction-Management-System-Frontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Transaction-Management-System-Frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3001/`.

## Database Diagram
![db_diagram](https://github.com/user-attachments/assets/0579b139-9c26-40c5-acbd-1aaca52b2fbb)

## Docker

### Install Docker

1. Download and install Docker from [Docker's official website](https://www.docker.com/products/docker-desktop).
2. Follow the installation instructions for your operating system (Windows, macOS, or Linux).
3. Verify the installation by running the following command in your terminal:
    ```sh
    docker --version
    ```

### Build and Run the Project using Docker

1. Build the Docker image:
    ```sh
    docker build -t tms-frontend .
    ```
2. Run the Docker container:
    ```sh
    docker run -p 3001:80 tms-frontend
    ```
3. Open your browser and navigate to `http://localhost:3001/`.

## .env

if run Transaction-Management-System-Backend project by using Visual Studio
you might have to change "VITE_APP_API_URL" in ".env" to :
    ```sh
    VITE_APP_API_URL="https://localhost:7106"
    ```

if run Transaction-Management-System-Backend project by using docker
you might have to change "VITE_APP_API_URL" in ".env" to :
    ```sh
    VITE_APP_API_URL="http://localhost:7106"
    ```