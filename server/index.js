const exp = require("express");
require("dotenv").config();
const cors = require("cors");
const userApp = require("./APIs/userApp");
const app = exp();

app.use(exp.json());
app.use(cors());

const port = process.env.PORT;

const client = require("mongodb").MongoClient;
client
  .connect(process.env.DBURL)
  .then((client) => {
    const database = client.db("softwareDB");
    const usersCollection = database.collection("users");
    app.set("usersCollection", usersCollection);
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", userApp);

app.listen(port, () => {
  console.log(`Running on port: ${port}.`);
});
