const express = require("express");
const cors = require("cors");
const path = require("path");
const url = require("url");
const app = express();
app.use(cors());

app.use("/callback/api", (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const accessToken = queryObject.access_token;

  // Split the hash into key-value pairs
  //   const params = new URLSearchParams(hash);

  //   // Access individual parameter values
  //   const accessToken = params.get("access_token");
  //   const dataAccessExpirationTime = params.get("data_access_expiration_time");
  //   const expiresIn = params.get("expires_in");
  console.log(accessToken);

  return res.json({ a: "func" });
});
app.use("/", express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("h");
});
