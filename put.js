const express = require('express');
const Joi = require('joi');

let app = express();

app.use(express.json());

const models = [
    { id: 1, name: 'adminone', number: 94563344 },
    { id: 2, name: 'admintwo', number: 94563344 },
    { id: 3, name: 'adminthree', number: 94563344 },
    { id: 4, name: 'adminfour', number: 94563344 }
];

app.put('/api/models/:id', (req, res) =>{
    const model = models.find(m => m.id === parseInt(req.params.id));
    if (!model) return res.status(404).send("The desired item was not found.");

    const { error } = validateModel(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    model.name = req.body.name;
    model.number = req.body.number;
    res.send(model);
});

function validateModel(model) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(model);
}

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`This PUT request is running on port ${port}`));
