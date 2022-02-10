# Asset Manager

## Setup

### Database

This project uses [MongoDB](https://www.mongodb.com/pt-br?_ga=2.96292764.1062467626.1643549034-1712413888.1637247134) as its database. To make it easier to setup the database, use [Docker](https://www.docker.com/) (if you don't have it installed, [install it](https://www.docker.com/get-started)) to run the official Mongo Docker image:

```bash
docker run -p 27017:27017 --name asset-database -e MONGO_INITDB_ROOT_USERNAME='root' -e MONGO_INITDB_ROOT_PASSWORD='rootpassword' -d mongo:5.0.5
```

> The enviroment variables `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` may be changed as it suits you.

> `mongo:5.0.5` is a way to ensure that the version use locally is the same as the version used in the project development, but (probably) is possible to use other versions, so you can try `mongo:latest` instead.

This will pull Mongo official image if not pulled yet and start a container with the databased exposed on port `27017` (Mongo's default port).

When re-running, you can just:

```bash
docker run asset-database
```

### Packages

If you don't have [Node](https://nodejs.org/) installed yet, install it. I recommend using [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to do so.

After this, go to the project's root and:

```bash
npm i -g ts-node # required for typescript
npm i
```

### Seed

In order to work locally, some local data would be nice. There is a script to generate fake data and populate the connected database, at collection "test".

```bash
npm run seed
```

## Run

After setting up everything you need, make sure you have a local mongo database running on port 27017

```bash
docker run asset-database # or the name you gave to this docker on setup
```

You can use nodemon to keep the project live while editing, you can do that thought the command:

```bash
npm run dev
```