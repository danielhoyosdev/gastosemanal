import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    nombreGasto = React.createRef();
    valorGasto  = React.createRef();

    crearGasto = (e) => {
        e.preventDefault();

        const gasto = {
            nombreGasto : this.nombreGasto.current.value,
            valorGasto : this.valorGasto.current.value
        }

        this.props.agregarGasto(gasto);

        e.currentTarget.reset();
    }

    render(){
        return(
            <form onSubmit= { this.crearGasto }>
                <h2>Agrega tu gasto aquí</h2>
                <div className="campo">
                    <label>Nombre: </label>
                    <input ref={ this.nombreGasto } className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Valor: </label>
                    <input ref={ this.valorGasto } className="u-full-width" type="text" placeholder="Ej. 5000" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

Formulario.PropTypes = {
    agregarGasto: PropTypes.func.isRequired
}

export default Formulario;