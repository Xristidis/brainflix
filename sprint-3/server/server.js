const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require("./routes/routes.js")(app, fs);



// app.use(express.json());
// app.use("/videos", routes);

app.listen(8080, () => {
    console.log("we up and running")
});
