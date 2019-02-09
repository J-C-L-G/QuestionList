import axios from 'axios';
const BASE_URL = 'http://localhost:9000/api/question';

const crudOperations = {
    getQuestionList: () => (axios.get(`${BASE_URL}`)),

    getQuestion: (id)=> (axios.get(`${BASE_URL}/${id}`)),

    createQuestion: (newQuestion) => (axios.post(`${BASE_URL}`, newQuestion)),

    addAnswer: (id, newAnswer) => (axios.put(`${BASE_URL}/${id}`, newAnswer))
};

export default crudOperations;