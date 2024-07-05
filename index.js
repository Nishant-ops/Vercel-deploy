const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.use("/callback/api", (req, res) => {
  console.log(window.location);
  const hash = req.url.split("#")[1];

  // Split the hash into key-value pairs
  const params = new URLSearchParams(hash);

  // Access individual parameter values
  const accessToken = params.get("access_token");
  const dataAccessExpirationTime = params.get("data_access_expiration_time");
  const expiresIn = params.get("expires_in");
  console.log(accessToken, dataAccessExpirationTime, expiresIn);

  return res.json({ a: "func" });
});
app.use("/", express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("h");
});
