
const http = require("http");
const app = require("./module/module");
const server = http.createServer(app)


server.listen(3002, () => {
    console.log(`Server running on port ${3002}`);
  });