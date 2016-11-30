# Art Indonesia - API

> Nothing is impossible

This repo is used to support the backend side of Art Indonesia Project.<br>
Art Indonesia Project is a website to help local sculptors displaying their products for potential customers.


In this repo I use <b>node.js</b>

## Team Member

| Name     | Email        | GitHub |
|:--------:|:------------:|:------:|
| Ari Adiprana | ari.adiprana@gmail.com | [@ariadiprana](https://github.com/ariadiprana)

--------------------------------------------------------------------------------

## Development

Open `server` directory.

### Server

```sh
npm install
npm run dev
```

## Deployment

### Infrastructure

(Will use AWS)

### Server

(Will use PM2)


--------------------------------------------------------------------------------

## Data Models

### Model A

```js
{
  "name": String
  "point": Number
  "active": Boolean
}
```

### Model B

```js
{
  "name": String
  "point": Number
  "active": Boolean
}
```

--------------------------------------------------------------------------------

## API Endpoints

Root URL: `http://localhost:3000/api`

### Resource A

| Endpoint         | HTTP | Description |
|------------------|------|-------------|
| `api/things`     | GET  | Get all things
| `api/things`     | DEL  | Delete all things
| `api/things`     | POST | Post a new thing
| `api/things/:id` | GET  | Get thing by id
| `api/things/:id` | DEL  | Delete thing by id
| `api/things/:id` | PUT  | Update thing by id

### Resource B

| Endpoint        | HTTP | Description |
|-----------------|------|-------------|
| `auth/signup`   | POST | Sign up for a new user
| `auth/sigin`    | POST | Sign in with existed user
| `api/users`     | GET  | Get all users
| `api/users`     | DEL  | Delete all users
| `api/users/:id` | GET  | Get one user profile by id
| `api/users/:id` | DEL  | Delete one user profile by id
| `api/users/:id` | PUT  | Update one user profile by id

--------------------------------------------------------------------------------

## License

[Selected License]
