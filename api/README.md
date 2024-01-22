# Getting started

### Postgres database setup

- Create the database in postgress with the dump.sql file located at "/src/app/connection/dump/dump.sql"
- Adding PostGIS extension into database

```
CREATE EXTENSION postgis;
```

#### Node API setup

- Install dependencies

```
npm install
```

- Create a ".env" file with values to connect with Postgress, following this example:

```
DB_PASSWORD=postgres_password
DB_USER=postgres_user
DB_HOST=localhost
DB_DATABASE=bc_str
DB_PORT=5432
```