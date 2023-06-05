import Title from "./componentesOne/Title";
import One from "./componentesOne/One";
import { Three } from "./componentesOne/three";
import Two from "./componentesOne/Two";
import Last from "./componentesOne/Last";

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
      <One one={one} numberOne={numberOne} />
      <Two two={two} numberTwo={numberTwo} />
      <Three three={three} numberThree={numberThree} />
      <Last one={numberOne} two={numberTwo} three={numberThree} />
    </div>
  );
};

export default PrimerEjercicio;