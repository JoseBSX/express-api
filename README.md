# Express API

## Run

### Docker compose

Start server

```sh
# Install dependencies
npm install

# Run docker
docker compose up
```

### Node local

Add file `.env.local` with environment variables:

```sh
API_SECRET_KEY = my_api_secret
PORT = 3000
MONGO_URI = "uri for mongo"
```

Install dependencies:

```sh
npm install
```

Start server

```sh
# Dev mode
npm run dev

# Prod mode
npm start
```

## Services

Import Postman collection for test: [Express API Collection](docs/ExpressAPI.postman_collection.json)

| Method | URL | Description |
|--------|-----|-------------|
| POST | /auth/sign_in | Login |
| POST | /auth/sign_out | Logout |
| POST | /auth/sign_up |Registro de usuarios|
| GET | /users | Consulta de usuarios |
