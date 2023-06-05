import Title from "./componentesOne/Title";

const PrimerEjercicio = () => {
  const curso = 'Curso para fabian y jorge';
  const one = 'fundamentos de react';
  const numberOne = 1;
  const two = 'usando props';
  const numberTwo = 2;
  const three = 'usando state';
  const numberThree = 3;
  return (
    <div>
      <Title curso={curso} />
      {/* Hacer lo que les mostre pero con lo siguiente */}
      <p>
        {numberOne} - {one}
      </p>
      <p>
        {numberTwo} - {two}
      </p>
      <p>
        {numberThree} - {three}
      </p>
      <h3>
        la suma es : {numberOne + numberTwo + numberThree}
      </h3>
    </div>
  );
};

export default PrimerEjercicio;