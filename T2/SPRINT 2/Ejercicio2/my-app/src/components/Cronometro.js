import React, { Component } from 'react';

class Cronometro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiempo: 0,
      activo: false,
    };

    this.intervalo = null;
  }

  iniciarCronometro = () => {
    if (!this.state.activo) {
      console.log('Iniciando cronómetro');
      this.setState({ activo: true });

      this.intervalo = setInterval(() => {
        this.setState((prevState) => {
          console.log('Segundos transcurridos:', prevState.tiempo + 1);
          return {
            tiempo: prevState.tiempo + 1,
          };
        });
      }, 1000);
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
        <h2>Tiempo transcurrido: {tiempo} segundos</h2>
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
