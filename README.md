# Neo-Brutalisme: Running Nuxt.js with JSON Server

This project, Neo-Brutalisme, uses Nuxt.js for the frontend and `json-server` to simulate a backend API. The two are run concurrently using the `concurrently` package.

## Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

## Setup

Clone the repository:

```bash
git clone https://github.com/Welander1994/Neo-Brutalisme.git
```
## Navigate to the project directory:

```bash
cd Neo-Brutalisme
```

## Install the project dependencies:

```bash
npm install
```

# Mock API Setup with json-server
This project uses json-server to mock a REST API. You can modify the db.json file in the root directory to customize the mock data.

Example db.json:

```bash
{
  "posts": [
    {
      "id": 1,
      "title": "Hello World"
    }
  ]
}
```

## Available Scripts

Below are the scripts defined in the `package.json` file:

- `npm run build`: Builds the Nuxt app for production.
- `npm run dev`: Starts the Nuxt development server with the `--host` flag to bind to your local network.
- `npm run json-server`: Starts `json-server` on port 4000 and watches `db.json` for changes.
- `npm run start`: Runs both the Nuxt development server and `json-server` concurrently using `concurrently`.

```bash
npm run start
```


This will:
- Start the Nuxt development server at http://localhost:3000
- Start the mock API server at http://localhost:4000