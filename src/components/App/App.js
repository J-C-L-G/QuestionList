import React, { Component } from 'react';
import Routes from "../Routes/Routes";
import Operations from '../../operations';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newQuestion: {
                title: '',
                question: ''
            },
            questions: []
        };
        this.updateNewQuestion = this.updateNewQuestion.bind(this);
    }

    componentDidMount(){
        return Operations.getQuestionList()
            .then(({data})=>{
                this.setState({questions: data});
            });
    }

    updateNewQuestion({target}){
        console.log(target);
        const {id, value} = target;
        const data = { [id]: value};
        const newQuestion = Object.assign({}, this.state.newQuestion, data );
        this.setState( { newQuestion } );
    }

    render() {
    return (
        <div id="App">
            <Routes {...this.state} updateNewQuestion={this.updateNewQuestion}/>
        </div>
    );
  }
}

export default App;
