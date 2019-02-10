const BASE_URL = '/api/question';
const PORT = 9000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

let noteId = 1;
const QuestionList = [
    {
        id: noteId++,
        title: "title 1",
        question: "question 1",
        answers: [
            "answer 1"
        ]
    },
    {
        id: noteId++,
        title: "title 2",
        question: "question 2",
        answers: [
            "answer 1",
            "answer 2"
        ]
    },
    {
        id: noteId++,
        title: "title 3",
        question: "question 3",
        answers: [
            "answer 1",
            "answer 2",
            "answer 3"
        ]
    },
    {
        id: noteId++,
        title: "title 4",
        question: "question 4",
        answers: []
    }
];

//Enable CORS
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to inspect req
app.use( '*', (req, res, next) => {
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
    res.json( QuestionList.map(({id, question}) => ({id, question})) );
});

// getQuestion
app.get(`${BASE_URL}/:id`, (req, res)=> {
    res.json( QuestionList.find(({id})=>(id == req.params.id)) );
});

// createQuestion
app.post(BASE_URL, (req, res) => {
    QuestionList.push({id: noteId++, answers: [], ...req.body});
    res.json({success: true})
});

// addAnswer
app.put(`${BASE_URL}/:id`, (req, res)=> {
    const { answer } = req.body;
    const questionToUpdate = QuestionList.find(({id})=>(id == req.params.id));
    questionToUpdate.answers.unshift(answer);
    res.json( questionToUpdate.answers );
});

app.listen(PORT, ()=>(
    console.log(`Mock-Server listening on: ${PORT}`)
));