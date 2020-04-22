# Tanam Land Service

API is documented at Swagger [app.swaggerhub.com/apis-docs/isfanr/Tanam](https://app.swaggerhub.com/apis-docs/isfanr/Tanam/1.0.0).<br />

API is accessible on [api-land-tanam.herokuapp.com](https://api-land-tanam.herokuapp.com).<br />

This project was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Endpoints List

``` bash
[GET] '/' = Check if API is live
[GET] '/lands' = Get all lands
[GET] '/lands/by-id/:id' = Get land by land id
[GET] '/lands/by-user/:userId' = Get lands by user id
[POST] '/lands/:userId' = Create new land by user id
[DELETE] '/lands/:id' = Delete land by id
[GET] '/harvests' = Get all harvests
[GET] '/harvests/:landId' = Get harvests by land id
[POST] '/harvests/:landId' = Create new harvest by land id
[DELETE] '/harvests/:id' = Delete harvest by id
[GET] '/activities' = Get all activities
[GET] '/activities/:landId' = Get activities by land id
[POST] '/activities/:landId' = Create new activity by land id
[DELETE] '/activities/:id' = Delete activity by id
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install required dependencies.

### `npm start`

Runs the app in the development mode.<br />
API will run on [http://localhost:4004](http://localhost:4004).

### `npm run dev`

Runs the app in the development mode with hot reload.<br />
API will run on [http://localhost:4004](http://localhost:4004).

### `npm run lint`

Checks if there is any warning or wrong in codes lint.

### `npm run lint-fix`

Checks if there is any warning or wrong in codes lint.<br />
And automatically fixes what can be fixed.

## Learn More

You can learn more in the [Express documentation](https://expressjs.com/).