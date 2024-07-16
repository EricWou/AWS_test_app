const express = require('express');
const path = require("path");

const app = express();
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/build");

app.use(express.static(buildPath));

app.get('/api', (req, res) => {
    res.json({ users: ["user1", "user2", "user3", "user4", "user5"] });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../client/build/index.html"), (err) => {
     if (err) {
        res.status(500).send(err);
     }
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

//to connect with AWS Ubuntu server, on PowerShell with admin privileges:
//cd \
//cd users\ericw\desktop
//ssh -i "MyConnectionPair.pem" ubuntu@ec2-3-142-46-32.us-east-2.compute.amazonaws.com