# nestJsApp

## Introduction

This project serves as a starting point for Node.js applications using Docker, offering an encapsulated, optimized, and scalable environment. The application is built using [Nest.js](https://nestjs.com/), a powerful and extensible Node.js framework.

## Project Structure

The project follows a standard Node.js application setup, providing a solid foundation for your apps.

## Getting Started

1. **Initialize your Node.js app in a Docker container:**

   ```bash
   docker run -it -w /usr/src/app -v "$(pwd):/usr/src/app" node:20 npm init -y
   ```

For Linux users, create an alias for npm:

```bash
alias npm='docker run -it -w /usr/src/app -v "$(pwd):/usr/src/app" nestjsapp-app npm'
```

also you can create an alias for nest:

```bash
alias nest='docker run -it -w /usr/src/app -v "$(pwd):/usr/src/app" nestjsapp-app nest'
```

Run the containers:

```bash
docker-compose up
```

Copy the .env.example to .env and set your environment variables:

```bash
cp .env.example .env
```

About Nest.js:

Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It uses TypeScript and takes advantage of its features like decorators, static types, and interfaces to enhance the development experience. The framework follows the modular and dependency injection principles, making it easy to manage and extend.

For more information about Nest.js, visit Nest.js official website.

Why MongoDB?
MongoDB is included as a database for your Node.js application. It provides a scalable and flexible solution for handling data, making it a popular choice for many applications.