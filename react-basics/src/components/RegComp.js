import React, { Component } from "react";

 class RegComp extends Component {
    render()
     {
        console.log("Regular component rendered");
        return (
            <div>
               
                This is Regular Component {this.props.name}
            </div>);
        
    }
}
export default  RegComp;

