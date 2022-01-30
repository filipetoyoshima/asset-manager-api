# Asset Manager

## Setup

### Database

This project uses [MongoDB](https://www.mongodb.com/pt-br?_ga=2.96292764.1062467626.1643549034-1712413888.1637247134) as its database. To make it easier to setup the database, use docker to run the official Mongo Docker image:

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