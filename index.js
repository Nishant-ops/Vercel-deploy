const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.use("/callback/api", (req, res) => {
  console.log(req.originalUrl);
  console.log(req.baseUrl);
  console.log(req.url.includes("access_token"));

  return res.redirect("https://brandcollab.app");
});
app.use("/", express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("h");
});
