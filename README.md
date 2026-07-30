# Odin Inventory — Film & Genre Manager

An inventory management app built for [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application) Node.js curriculum. Manages a collection of films and their genres, with a full CRUD interface and a many-to-many relationship between the two entities.

## Features

- **Films**: create, read, update, delete. Each film has a title, year, director, poster image and one or more genres.
- **Genres**: many-to-many relationship with films (a film can belong to multiple genres, a genre can contain multiple films). New genres can be created inline while adding/editing a film, via a tag-style autocomplete input.
- **Genres page**: browse films grouped by genre, with a search bar to filter genres by name (case-insensitive), and links from each film straight to its update page.
- **Admin protection**: destructive actions (update, delete) require an admin password, checked against an environment variable — no user accounts, just a shared secret as required by the assignment.
- Server-side validation (`express-validator`) plus database-level constraints (`NOT NULL`, `UNIQUE`, `CHECK`) to prevent invalid or empty data.

## Tech stack

- **Express 5** — routing and middleware
- **EJS** — server-side templating
- **PostgreSQL** (`pg`) — database, with raw SQL queries (CTEs, `array_agg`, `json_agg`, `unnest`) for the many-to-many logic
- **express-validator** — input validation

## Database schema

- `films` — id, title, year, director, image
- `genres` — id, name
- `relations` — join table (`film_id`, `genre_id`), composite primary key, `ON DELETE CASCADE` on both foreign keys

## Setup

1. Clone the repo and install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file (or export the variables directly) with:
   ```
   DATABASE_URL=postgres://user:password@host:port/dbname
   ADMIN_PASSWORD=your-secret-password
   PORT=3000
   ```
3. Create the database tables:
   ```
   npm run populatedb
   ```
4. Start the app in dev mode (auto-restarts on file changes):
   ```
   npm run dev
   ```

To reset the database, run `npm run droptables` before re-running `populatedb`.

## Deployment

Deployed on [Render](https://render.com):
- **Build command**: `npm install`
- **Start command**: `node app.js`
- Set `DATABASE_URL` and `ADMIN_PASSWORD` as environment variables in the Render dashboard, pointing to a Render PostgreSQL instance.
- Run `npm run populatedb` once via the Render Shell after the first deploy to seed the database.

## Live demo

https://odin-inventory-hfbb.onrender.com/film
