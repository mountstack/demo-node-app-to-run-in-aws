const express = require("express"); 

const app = express(); 
app.use(express.json()); 

let persons = [ 
    { 
        name: "Rijwan", 
        email: "rijwan@gmail.com"
    }, 
    { 
        name: "Shifat", 
        email: "shifat@gmail.com"
    }, 
    { 
        name: "Nuhash", 
        email: "nuhash@gmail.com"
    }, 
] 

app.get('/user/get', (req, res) => { 
    res.json({ 
        status: 'success', 
        persons 
    }) 
}) 

app.post('/user/create', (req, res) => { 
    persons.push(req.body); 
    res.json({ 
        status: 'success', 
        persons 
    }) 
}) 


app.listen(3000, () => { 
    console.log('App is running...'); 
}) 