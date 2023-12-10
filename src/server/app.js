const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressFileload = reuire('express-fileupload');
const cors = require("cors");
const http = require("http");

const server = http.createServer(app);

const dotenv = require("dotenv");
/* const { default: axios } = require("axios"); */
dotenv.config();

app.get("/", (req, res) => res.send("Hello World!"));

app.post('/upload', function(req, res) {
	console.log(req.files.foo); // the uploaded file object
  });

app.use(bodyParser.json());
app.use(cors());

server.listen(process.env.PORT_SRV, () =>
	console.log(`Server started!! port = ${process.env.PORT_SRV}`)
);
