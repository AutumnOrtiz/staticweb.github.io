const express = require('express');
const app = new express();

app.get('/', (req,res) =>{
    res.send("Hello World")
});

app.use(express.static('public'))
app.listen(5000, ()=>{ 
    console.log('App listening on port 5000')
});

app.get('/', (req,res) => {
    res.sendFile(path.resolve(_dirname, '/index'))
});

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(_dirname, '/about'))
});

app.get('/contact', (req,res) => {
    res.sendFile(path.resolve(_dirname, '/contact'))
});

app.get('/post', (req,res) => {
    res.sendFile(path.resolve(_dirname, '/post'))
});
