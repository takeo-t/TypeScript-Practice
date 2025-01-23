import * as http from "http";
import { capitalizeWords } from "./capitalizeWords";

const port = 3000;
const hostname = "localhost";

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const input = "hello world ohayou sekai";
  const output = capitalizeWords(input);
  res.end(output + "\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
