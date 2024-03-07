const express = require('express');

let app = express();

const models = [
    
    { id : 1 , name : 'adminone', number : 94563344},
    { id : 2 , name : 'admintwo', number : 94563344},
    { id : 3 , name : 'adminthree', number : 94563344},
    { id : 4 , name : 'adminfour', number : 94563344}

]

app.get('/', (req,res) => {
    res.send('hello , this is a GET request')
} );


// but not two separate arrays.
//  If you want to send multiple arrays as a response, 

// --------------

// app.get('/api/courses' , (req,res) =>{
//     res.send([1, 2, 3], [4,5,6])
// });

// -------------


//  should combine them into a single array or object. 

app.get('/api/models', (req, res) => {
    res.send(models)
});

app.get('/api/models/:id' , (req, res) => {  //here id is the parameter
   let model =  models.find(m => m.id === parseInt(req.params.id));
   if(!model) res.status(404).send('The model not found')

   res.send(model)
})

//-----------------------------------------------

// app.get('/api/models/:year/:month' , (req, res) => {  //here id is the parameter
//     res.send(req.params)                       
// })

//-------------------------------------------------

//----------------------------------------------

// [REQ.QUERY is for query]

app.get('/api/models/:year/:month' , (req, res) => { 
     //here id is the parameter
    res.send(req.query)
})


const port = process.env.PORT || 5000; //this 300 is default for localhost

// process.env.PORT is an environment variable that represents 
// the port on which the server should listen for incoming requests

app.listen(port , () => console.log(`this GET request is running on port ${port}`));