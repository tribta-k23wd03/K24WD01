import { createServer, IncomingMessage, ServerResponse } from "http";
import { User } from "./models/User";

let users: User[] = [];
let nextId = 1;

function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
  });
}

const server = createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    // CORS & setup headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.writeHead(204); // empty data
      res.end;
      return;
    }

    // ROUTE: GET/USERS getall users
    if (req.method === "GET" && req.url === "/users") {
      res.writeHead(200);
      res.end(JSON.stringify(users));
      return;
    }

    // ROUTE: POST/USER create new user
    if (req.method === "POST" && req.url === "/users") {
      try {
        const data = await parseBody(req);
        const newUser: User = {
          id: nextId++,
          name: data.name,
          email: data.email,
        };

        users.push(newUser);

        res.writeHead(201);
        res.end(JSON.stringify(newUser));
      } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: "Invalid JSON" }));
      }
      return;
    }

    // ROUTE: PUT/USER edit existing user
    // validation (user?true:false)

    // ROUTE: DELETE/USER delete existing user
    // validation (user?true:false)
  }
);

// localhost: PORT
server.listen(9999, () => {
  console.log("Server is running at http://localhost:9999");
});
