
// class based component

import React from 'react';

export class Random extends React.Component {

    constructor() {
        super();
        this.state = {course: "MERN"};
    }

    componentDidMount() {
        console.log("course value in state",this.state.course);
        setTimeout(() => {
            this.setState({course: "MEAN"})
        }, 1000);
        console.log("course value in state after updation",this.state.course);

    }

    changeCourse = ()=>{
        this.setState({course:"MEAN"});
    }

    render() {
        return(
            <div>
                <p>Inside Random Component</p>
                <p>Random component state course value {this.state.course}</p>
                <button style={{backgroundColor:'black',color:'white'}}
                onClick={this.changeCourse}>Click here to update state value</button>
            </div>
        )
    }
}
