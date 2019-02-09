import React from 'react';
import { askView, title, subtitle, questionForm, formLabel, formControl } from './Ask.scss';

const Ask = ({newQuestion, updateNewQuestion}) => (
    <div className={askView}>
        <h1 className={title}>ASK <span className={subtitle}>a question</span></h1>
        <div className={questionForm}>
            <div className={formLabel}>
                <label htmlFor="title">Title</label>
                <label htmlFor="question">Question</label>
            </div>
            <div className={formControl}>
                <input id="title" type="text" value={newQuestion.title} onChange={updateNewQuestion} />
                <textarea id="question" value={newQuestion.question} onChange={updateNewQuestion} />
                <button>Submit</button>
            </div>
        </div>
    </div>
);

export default Ask;