import express from 'express';

const app = express();
const port = 3000;

let dogs = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("The second workshop");
});

app.get('/dogs', (req, res) => {
    res.status(200).json(dogs);
});

app.post('/dogs', (req, res) => {
    const breed = req.body.breed;
    const name = req.body.name;

    const newDog = { id: dogs.length, breed: breed, name: name };
    dogs.push(newDog);

    res.status(201).send(newDog);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
