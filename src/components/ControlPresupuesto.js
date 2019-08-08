import React, { Component } from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

class ControlPresupuesto extends Component {
    render(){
        return(
            <>
                <Presupuesto presupuesto = { this.props.presupuesto }/>
                <Restante presupuesto = { this.props.presupuesto } restante = { this.props.restante } />
            </>
        );
    }
}

export default ControlPresupuesto;