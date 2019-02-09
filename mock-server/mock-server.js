const BASE_URL = '/api/question';
const PORT = 9000;
const express = require('express');
const cors = require('cors')
const app = express();

//Enable CORS
app.use(cors());

// Middleware to inspect req
app.use((req, res, next) => {
    console.log(`--------------------- REQUEST INFORMATION --------------------\n`);
    console.log(`Path: ${req.path}`);
    if(req.params){
        console.log('..:: req.params ::.. ');
        console.log(req.params);
    }
    if(req.body){
        console.log(' ..:: req.body ::.. ');
        console.log(req.body);
    }
    if(req.query){
        console.log(' ..:: req.query ::.. ');
        console.log(req.query);
    }
    console.log(`\n\n`);
    next();
});

// getQuestionList
app.get(BASE_URL, (req, res)=> {
    res.json([
            {id: 1, question: "question 1"},
            {id: 2, question: "question 2"},
            {id: 3, question: "question 3"},
            {id: 4, question: "question 4"}
        ]);
});

// getQuestion
app.get(BASE_URL, (req, res)=> {
    res.json({
        id: 1,
        title: "title 1",
        question: "question 1",
        answer: [
            "answer 1",
            "answer 2"
        ]
    })
});

app.listen(PORT, ()=>(
    console.log(`Mock-Server listening on: ${PORT}`)
));