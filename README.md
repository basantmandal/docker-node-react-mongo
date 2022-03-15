![Logo](docs/leaf.svg) ![Logo](docs/nodejs.svg) ![Logo](docs/reactjs.svg)

### Node, Mongo, React Docker Compose Project - Starter for building MERN Apps using Docker

-   Includes Node 14, MongoDB, React17 (Backend & Frontend).
-   Includes Dotenv, Body-Parser, CORS, Express, Faker, MongoDB, Nodemon (NodeJS API)
-   React Dotenv, Axios, Nodemo, React-Icons, Router Dom for both Backend & Frontend.
-   MongoDB data is persistant, saved under data/mongodb/data folder.
-   NodeJS & React both will update on file change as Nodemon is added.
-   .env file is used for Environment Variables.
-   Docker v3 compatible.
-   Added Sample Mongoose - MongoDB Connection & Added Sample Code to Add Data

### Prerequisites:

You must have Docker Installed in your System ! Docker version >= 20.10.x & Docker Compose version >= 1.25.x

### How to use this Docker Compose

`$ docker-compose build --no-cache`
`$ docker-compose up -d --remove-orphans`

#### Then you can check the status of the containers by running:

`$ docker ps`

#### Docker Bash:

1. `$ docker exec -it MERN-React-Backend bash`
2. `$ docker exec -it MERN-React-Frontend`
3. `$ docker exec -it MERN-Node14-API`

![Logo](docs/docker_ps.png)

### Url Links

1. [Node - Server (http://localhost:3001)](http://localhost:3001 'Node - Server - URL')
2. [React-Frontend (http://localhost:3002)](http://localhost:3002 'React-Frontend (http://localhost:3002)')
3. [React-Backend (http://localhost:3003)](http://localhost:3003 'React-Backend (http://localhost:3003)')
4. Mongo Connection for Compass - mongodb://root:root123@localhost:27017/

![Logo](docs/mongodb_connection.png)

> This is a Non Production Docker Compose. This is just for Local Test Development
