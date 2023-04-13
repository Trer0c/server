import express from "express";

import { urlConfig } from "./urlConfig.js";

const app = express();

app.use(express.json());

app.listen(urlConfig.portServer, () => {
    console.log("Server started on port: " + urlConfig.portServer);
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(CreateRoom(req));
});

app.get("/", (req, res) => {
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(GetRoom(req));
});
