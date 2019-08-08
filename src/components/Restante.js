import React, { Component } from 'react';
import { revisarPresupuesto } from '../helper';

class Restante extends Component {
    render(){
        const restante = this.props.restante;
        const presupuesto = this.props.presupuesto;
        
        return(
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante $ { this.props.restante }
            </div>
        );
    }
}

export default Restante;