// let redis = require("redis");
// client = redis.createClient();
// var client = redis.createClient(port, host);
// client.on("connect", function () {
//   console.log("connected");
// });
let express = require("express");
let app = express();
let port = 9000;

app.get("/", function (req, res) {
  res.json("hiiiiiiiiii iiiiii");
});
app.listen(port, () => {
  console.log("server listen");
});
