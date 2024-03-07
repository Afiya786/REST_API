const Joi = require('joi');
const express = require('express');
let app = express();


app.use(express.json())




const models = [
    
    { id : 1 , name : 'adminone', number : 94563344},
    { id : 2 , name : 'admintwo', number : 94563344},
    { id : 3 , name : 'adminthree', number : 94563344},
    { id : 4 , name : 'adminfour', number : 94563344}

]

app.post('/api/models', (req ,res) => {

    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    // const result = Joi.Validate(req.body, schema)
    
    // if(error){
    //     return res.status(400).send(error.details[0].message)
    // }


    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const result= schema.validate(req.body);
    
    res.send(result)
    if (error) {
     res.status(400).send(error.details[0].message);
    }






    const model = {
        id : models.length + 1,
        name : req.body.name,
        number : req.body.number
    }

    models.push(model)
    res.send(models)


});


const port = process.env.PORT || 3000; //this 300 is default for localhost

// process.env.PORT is an environment variable that represents 
// the port on which the server should listen for incoming requests

app.listen(port , () => console.log(`this POST request is running on port ${port}`));
   
   





    