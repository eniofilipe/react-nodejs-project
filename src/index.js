import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button'


class App extends React.Component {

  state = {
    contador:0,
    nome: "",
  }

  adicionar = () =>{
    this.setState({
      contador: this.state.contador+1,
    });
  }

  mudaNome = (event) => {
    this.setState({
      nome: event.target.value,
    })
  }

  render() {
    return (
      <div>
        Aprendendo React!!
        <br></br>
        <input onChange={this.mudaNome}></input>
        <br></br>
        Nome: {this.state.nome}
        <br></br>
        <Button press={this.adicionar}  title="" descricao="">Update</Button>
        Contador: {this.state.contador}
        
      </div>
        
    
    );
  }
}

render(<App />, document.getElementById('app'));