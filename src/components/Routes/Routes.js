import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import {Ask, QuestionList, Question} from "../Views";
import URL from './Urls';
import Header from '../Header/Header';
const browserHistory = createBrowserHistory();

const Routes = ({newQuestion, questions, updateNewQuestion}) => (
    <Router history={browserHistory}>
        <React.Fragment>
            <Header />
            <Switch>
                <Route exact path={URL.ask.url}
                       render={ ()=> <Ask newQuestion={newQuestion} updateNewQuestion={updateNewQuestion} />} />
                <Route exact path={URL.questionList.url}
                       render={() => <QuestionList questions={questions} />} />
                <Route exact path={URL.question.url}
                       component={Question}/>
                <Route render={ ()=> <Ask newQuestion={newQuestion} updateNewQuestion={updateNewQuestion} />} />
            </Switch>
        </React.Fragment>
    </Router>
);

export default Routes;