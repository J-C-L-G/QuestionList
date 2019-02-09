import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import Header from '../Header/Header';
import { Home, All, Question } from '../Views';

const history = createBrowserHistory();



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuestion: null,
            questions: [
                {id: 1, title: "question 1"},
                {id: 2, title: "question 2"},
                {id: 3, title: "question 3"},
                {id: 4, title: "question 4"}
            ],
        };
    }

    render() {
    return (
        <div id="App">
            <Router history={history}>
                <React.Fragment>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/all" component={All} questions={this.state.questions}/>
                    <Route exact path="/question/:id" component={Question}/>
                </React.Fragment>
            </Router>
        </div>
    );
  }
}

export default App;
