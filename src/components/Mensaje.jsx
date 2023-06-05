const Mensaje = ({message, color}) => {
  //console.log(message); jamas dejar clg en el codigo final
  
  return (
    <div>
      Este es mi componente
      <h1 style={{color: color}}>{message}</h1>
    </div>
  )
}

export default Mensaje