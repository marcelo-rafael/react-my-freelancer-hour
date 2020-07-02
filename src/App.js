import React from "react";
import FieldSet from "./components/fieldset";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    //criar o construtor que vai passar propriedades
    super(props);
    //State serve para tornar os componentes dinâmicos
    this.state = {
      //estabelecer as propriedades de state dos elementos
      ganhoMes: 0, //text começa com o campo vazio (string vazia)
      horasDias: 0, //number começa com 0 -> estado inicial do elemento
      diasSemana: 0, //number começa com 0
      semanasFerias: 0, //number começa com 0
      valueHour: 0,
    };
  }

  //functions criadas para renderizar os componentes dinâmicos conforme o input é preenchido

  setGanhoMes = (e) => {
    //criar uma function que atualiza o valor da variável
    this.setState({
      //setState: *changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.
      ganhoMes: parseInt(e.target.value), //parseIt: para que o valor retorne como número, e não como string
    });
  };
  setHorasDias = (e) => {
    this.setState({
      horasDias: parseInt(e.target.value),
    });
  };
  setDiasSemana = (e) => {
    this.setState({
      diasSemana: parseInt(e.target.value),
    });
  };
  setSemanasFerias = (e) => {
    this.setState({
      semanasFerias: parseInt(e.target.value),
    });
  };

  calculaValorHora = (e) => {
    e.preventDefault();
    console.log("funciona o botão!");

    const horasPorSemana = this.state.horasDias * this.state.diasSemana;
    const horasDeFerias = this.state.diasSemana * this.state.semanasFerias;
    const totalHoras = 52.1 * horasPorSemana - horasDeFerias;
    const ganhoPorAno = this.state.ganhoMes * 12;

    let valorDeHora = ganhoPorAno / totalHoras;
    valorDeHora += 0.2 * valorDeHora;
    valorDeHora = parseFloat(valorDeHora).toFixed(2);

    this.setState({
      // para atualizar o valor na tela! Chama o virtual DOM, o virtual DOM vê a diferença e ele altera a
      //tela sem precisar atualizar a página por completo
      valueHour: valorDeHora, //altera o HTML de acordo com o valor final
    });
  };
  // quem controla o value dos inputs é o React,
  // e assim você só o torna dinâmico com o onChange e o State

  render() {
    return (
      <main className="conteudo-principal">
        <section className="secao">
          <header className="cabecalho">Calcule o seu valor/hora!</header>
          <article className="conteudo">

            <form
              onSubmit={this.calculaValorHora}
              className="secao-formulario"
            >
              <div className="App">
                <FieldSet
                  legend="Quanto você quer ganhar por mês ?"
                  label="Quantidade por mês"
                  idInput="ganho-mes"
                  type="number"
                  value={this.state.ganhoMes}
                  onChange={this.setGanhoMes}
                />

                <FieldSet
                  legend="Quantas horas você quer trabalhar por dia?"
                  label="Horas por dia"
                  idInput="horas-dia"
                  type="number"
                  value={this.state.horasDias}
                  onChange={this.setHorasDias}
                />

                <FieldSet
                  legend="Quantos dias você quer trabalhar por semana ?"
                  label="Dias por Semana"
                  idInput="dias-semana"
                  type="number"
                  value={this.state.diasSemana}
                  onChange={this.setDiasSemana}
                />

                <FieldSet
                  legend="Quantas semanas por ano você quer tirar de férias ?"
                  label="Semanas por ano"
                  idInput="semanas-ferias"
                  type="number"
                  value={this.state.semanasFerias}
                  onChange={this.setSemanasFerias}
                />

                <button className="button" type="submit">
                  Calcular
                </button>
              </div>
            </form>
          </article>

          <footer className="rodape">
            <h3 className="rodape-valor">
              <span>{this.state.valueHour}</span>
              <small>/hora</small>
            </h3>
            <p className="rodape-legenda">Seu valor por hora</p>
          </footer>
        </section>
      </main>
    );
  }
}

export default App;
