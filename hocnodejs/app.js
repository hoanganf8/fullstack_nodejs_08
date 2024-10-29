import http from "http";
const server = http.createServer((req, res) => {
  //   res.setHeader("Set-Cookie", "name=hoangan;path=/");
  const url = req.url;
  if (url === "/users") {
    const users = [
      {
        id: 1,
        name: "hoangan",
      },
      {
        id: 2,
        name: "hoangan2",
      },
    ];

    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(users));
  }

  res.end("<h1>Hello World 111</h1>");
});
server.listen(8080, "localhost", () => {
  console.log("Server đang chạy với port 8080");
});
