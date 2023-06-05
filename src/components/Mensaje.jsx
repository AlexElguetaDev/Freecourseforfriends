const Mensaje = ({message, color}) => {
  console.log(message);
  
  return <div>
  Este es mi componente
  <h1 style={{color: color}}>{message}</h1>
  </div>
}

export default Mensaje