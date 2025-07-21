const jsonServer = require("json-server");
const cors = require("cors"); // ✅ Import cors
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// ✅ Enable CORS for all requests
server.use(cors()); 

// Middleware setup
server.use(middlewares);
server.use(router);

// Start the server
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
