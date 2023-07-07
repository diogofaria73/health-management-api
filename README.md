<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Solution Description
This API is responsible to integrate mobile application with GYM Database.
### Technologies

1. [NodeJs](https://nodejs.org/en) - Development Framework
2. [Npm](https://www.npmjs.com/) - Node package manager
3. [Nest](https://github.com/nestjs/nest) - Framework TypeScript starter repository.
4. [Prisma](https://www.prisma.io/) - A open source next-generation ORM.
5. [Docker](https://www.docker.com) - A open source platform as a service that use OS-level virtualization to delivery software in packages called containers.
6. [Docker-compose](https://docs.docker.com/compose/) - A tool to define and running multi-container docker application. With docker compose, you use a YAML file to configure your application's service, then with a single command, you create and start all the services from your configuration.

# 
## Install source dependencies
To execute the code in your local machine you need to follow these steps:
```bash
$ npm install
```
# 
## Setup environment variables

To setup you application configs, first, rename to file _.env.examples_  to _.env_. After open the file and look for this lines:

```json
DATABASE_URL="postgresql://postgres:docker@localhost:5432/rsxp?schema=public"
JWT_SECRET_KEY=''
JWT_SECRET_KEY_EXPIRATION=''
```
What I need to do?

1. You need to change your DATABASE_URL and set a new database address.
2. You need to define a JWT_SECRET_KEY. I recommend to use this site [MD5-Generator](https://www.md5hashgenerator.com/) to create a complex key.
3. You need to define the duration time of JWT_SECRET_KEY. I recommend that you use 1d.

# 
## Setup database structure

```bash
$ npm run db:migrate

```
#
## Run prisma migration
This command will create all the table structures in database
```bash
$ npm run db:migrate
```
#
## Running the app

```bash
# development
$ npm run start

# debug mode
$ npm run start:debug

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Diogo Faria](https://github.com/diogofaria73)
- Email - [diogofaria073@gmail.com](mailto:diogofaria073@gmail.com)
