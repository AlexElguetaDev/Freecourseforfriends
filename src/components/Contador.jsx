import { useState } from "react";

const Contador  = () => {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador => contador + 1);
    console.log('incrementar')
  }

  const decrementar = () => {
    setContador(contador - 1);
    console.log('decrementar');
    
  }

  const multiplicar = () => {
    setContador(contador * 2);
    console.log('multiplicar');
  }

  const reset = () => {
    setContador(0);
    console.log('reset');
  }

  const isEven = contador % 2 === 0;

  const incDecre = () => {
    if (contador % 2 === 0) {
      setContador(contador + 1);
    } else {
      setContador(contador - 1);
    }
  }

    return (
      <div>
        <h1>{contador}</h1>
        <h2>{isEven ? 'Es par' : 'Es impar'}</h2>
        <button onClick={incrementar} >Incrementar</button>
        <button onClick={decrementar} >Decrementar</button>
        <button onClick={multiplicar} >Multiplicar</button>
        <button onClick={incDecre} >Incrementar o Decrementar</button>
        <button onClick={reset} >Reset</button>
      </div>
    )
}

export default Contador;