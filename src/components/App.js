import React from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import { validarPresupuesto } from '../helper';

// Styles
import '../styles/App.css';


class App extends React.Component {
    state = {
        presupuesto : '',
        restante : '',
        gastos : {},
    }

    componentDidMount(){
        this.obtenerPresupuesto();
    }

    obtenerPresupuesto(){
        let presupuesto = prompt("¿ Cuál es tu presupuesto ?")

        let resultado = validarPresupuesto(presupuesto);

        if (resultado){
            this.setState({
                presupuesto,
                restante : presupuesto
            });
        }else{
            this.obtenerPresupuesto();
        }
    }
    
    agregarGasto = (gasto) => {
        const gastos = {...this.state.gastos}
        gastos[`gasto${Date.now()}`] = gasto;

        this.setState({ gastos });
        this.calcularRestante(gasto.valorGasto)
    }

    calcularRestante(valorGasto){
        let cantidad = Number(valorGasto);
        let restante = this.state.restante;
        
        restante -= cantidad;

        this.setState({
            restante
        });
    }
    
    render(){
        return(
            <div className="App container">
                <Header titulo="Gasto Semanal"/>
    
                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half column">
                            <Formulario agregarGasto = { this.agregarGasto }/>
                        </div>
                        <div className="one-half column">
                            <Listado gastos = { this.state.gastos }/>
                            <ControlPresupuesto presupuesto= { this.state.presupuesto } restante= { this.state.restante }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
