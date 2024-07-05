const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.use("/callback/api", (req, res) => {
  console.log(req.url);

  res.redirect("https://brandcollab.app");
});
app.use("/", express.static(path.join(__dirname, "public")));
app.listen(3000, () => {
  console.log("h");
});
