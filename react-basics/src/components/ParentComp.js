import React, { Component, PureComponent } from 'react'
import PureComp from "./PureComponent"
import RegComp from "./RegComp"
export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Shreya"
        }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name : "Shreya"
            });
        },3000);
    }
    
    render() {
        console.log("Parent component redered");
        return (
            <div>
               
                This is parent Component
                <RegComp name={this.state.name}/>
                <PureComp name ={this.state.name}/>


            </div>
        );
    }
}

export default ParentComp;
