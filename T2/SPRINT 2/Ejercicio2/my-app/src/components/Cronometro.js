import React, { Component } from 'react';

class Cronometro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiempo: 0,
      activo: false,
      tiempoInicio: 0,
    };

    this.intervalo = null;
  }

  formatearTiempo = (tiempo) => {
    const segundos = Math.floor(tiempo / 1000);
    const milisegundos = Math.round(tiempo % 1000);

    // Asegurarse de tener dos dígitos en los milisegundos
    const milisegundosFormateados = milisegundos < 10 ? `00${milisegundos}` : milisegundos < 100 ? `0${milisegundos}` : milisegundos;

    return `${segundos < 10 ? '0' : ''}${segundos}.${milisegundosFormateados}`;
  };

  iniciarCronometro = () => {
    if (!this.state.activo) {
      console.log('Iniciando cronómetro');
      this.setState({
        activo: true,
        tiempoInicio: Date.now() - this.state.tiempo,
      });

      this.intervalo = setInterval(() => {
        this.setState(prevState => ({
          tiempo: Date.now() - prevState.tiempoInicio,
        }), () => {
          console.log(`Tiempo transcurrido: ${this.formatearTiempo(this.state.tiempo)} segundos`);
        });
      }, 10);
    } else {
      console.log('El cronómetro ya está activo.');
    }
  };

  pausarCronometro = () => {
    if (this.state.activo) {
      console.log('Pausando cronómetro');
      this.setState({ activo: false });
      clearInterval(this.intervalo);
    } else {
      console.log('El cronómetro ya está pausado.');
    }
  };

  reiniciarCronometro = () => {
    console.log('Reiniciando cronómetro');
    this.setState({
      tiempo: 0,
      activo: false,
      tiempoInicio: 0,
    });
    clearInterval(this.intervalo);
  };

  componentWillUnmount() {
    console.log('Cronómetro desmontado, limpiando intervalo');
    clearInterval(this.intervalo);
  }

  render() {
    const { tiempo, activo } = this.state;

    return (
      <div>
        <h2>Tiempo transcurrido: {this.formatearTiempo(tiempo)} segundos</h2>
        <button onClick={this.iniciarCronometro} disabled={activo}>
          Iniciar
        </button>
        <button onClick={this.pausarCronometro} disabled={!activo}>
          Pausar
        </button>
        <button onClick={this.reiniciarCronometro}>Reiniciar</button>
      </div>
    );
  }
}

export default Cronometro;
