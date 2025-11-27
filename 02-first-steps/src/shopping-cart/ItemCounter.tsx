import { useState } from "react";

import "./ItemCounter.css";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    console.log("Hola Mundo desde sumar");
    setCount(count + 1);
  };

  const handleSubstract = () => {
    console.log("Hola Mundo desde restar");
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section className="item-row">
      <span className="item-text">{name}</span>
      <button onClick={handleSubstract}>-1</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+1</button>
    </section>
  );
};
