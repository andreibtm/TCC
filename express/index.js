import express from 'express';

const app = express();
const port = 3000;

let users = [];
let currentId = 0;

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Homework 2');
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const reqUser = users.find((user) => user.id === id);

    res.status(200).json(reqUser);
});

app.post('/users', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const now = new Date();

    const newUser = {
        id: currentId,
        name: name,
        email: email,
        password: password,
        createdAt: now,
        updatedAt: now
    };

    users.push(newUser);
    currentId++;

    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const updates = req.body;

    users = users.map((user) => (user.id === id ? {...user, ...updates} : user));

    const updatedUser = users.find((user) => user.id === id);
    updatedUser.updatedAt = new Date();
    res.status(200).json(updatedUser);
})

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    users = users.filter((user) => user.id !== id);

    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
