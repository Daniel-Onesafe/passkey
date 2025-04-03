# Running the POC
A poc for a React app and a fastify server to use passkeys for authentcation.

REF: https://simplewebauthn.dev/docs/

`npm i`

`npm start`

open http://localhost:3000 in your browser

As an alternative to `npm start`, you can start the database, server, and client with these individual commands:

`docker-compose up -d`

`npm run dev --workspace=server`

`npm run start --workspace=frontend`
