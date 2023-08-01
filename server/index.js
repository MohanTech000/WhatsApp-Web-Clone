import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


//databse connection
import Connection from "../server/database/db.js";

//routes
import Route from "./routes/route.js";

Connection();

const app = express();
const port = 5000;



//Cors
app.use(cors());

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);


// app.get("/", (req, res) => {
//     res.send("hello");
// })


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});    

