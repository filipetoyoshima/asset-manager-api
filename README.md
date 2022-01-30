# Asset Manager

## Setup

### Database

This project uses [MongoDB](https://www.mongodb.com/pt-br?_ga=2.96292764.1062467626.1643549034-1712413888.1637247134) as its database. Go make it easier to setup the database, use docker to run the official Mongo Docker image:

```bash
docker run --name tractian-challenge -d mongo:5.0.5
```

> `mongo:5.0.5` is a way to ensure that the version use locally is the same as the version used in the project development, but (probably) is possible to use other versions, so you can try `mongo:latest` instead.