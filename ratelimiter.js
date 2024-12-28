const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000);

app.use((req, res, next) => {
    const userID = req.headers["user-id"];
    if (!userID) {
        return res.status(400).send("User-ID header is missing");
    }

    if (!numberOfRequestsForUser[userID]) {
        numberOfRequestsForUser[userID] = 0;
    }

    numberOfRequestsForUser[userID] += 1;

    if (numberOfRequestsForUser[userID] > 5) {
        return res.status(429).send("Too many requests, please wait.");
    }

    next();
});

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'John' });
});

app.post('/user', (req, res) => {
    res.status(201).json({ msg: 'Created dummy user' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
