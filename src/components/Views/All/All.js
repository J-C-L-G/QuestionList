import React from 'react';

const All = (props) => {
    console.log(props)
    return (
        <div>
            {console.log(props)}
            {/*{ props.route.questions.map((q, i)=>(<li key={i}>{q.title}</li>)) }*/}
        </div>
    )
}

export default All;