require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3006;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/login", (req, res) => {
    const USERNAME = "uma victor";
    const PASSWORD = "8888";
    const { username, password } = req.body;
    if (username === USERNAME && password === PASSWORD) {
      const user = {
        id: 1,
        name: "uma victor",
        username: "uma victor",
      };
      const token = jwt.sign(user, "ASDFGHJKLWERTYUYT3456789");
      res.json({
        token,
        user,
      });
    } else {
      res.status(403);
      res.json({
        message: "wrong login information",
      });
    }
  });
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})