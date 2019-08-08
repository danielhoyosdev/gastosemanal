import React, { Component } from "react";

class Gasto extends Component {
    render(){
        const { nombreGasto, valorGasto } = this.props.gasto;
        
        return(
            <li className="gastos"> 
                <p>
                    { nombreGasto }
                    <span className="gasto">$ { valorGasto } </span>
                </p>
            </li>
        );
    }
}

export default Gasto;