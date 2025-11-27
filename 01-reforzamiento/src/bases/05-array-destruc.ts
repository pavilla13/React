const characterNames = ["Mikasa", "Eren", "Levi"];

const [, , levi] = characterNames;

console.log(levi);

const returnsArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

function useState(value: string) {
  return [
    value,
    (cadena: string) => {
      console.log(cadena);
    },
  ] as const; // Se pone as const para indicar que siempre sea una función
              // Y no sea, por ejemplo, un string 
};

const [name, setName] = useState("Pablo");
// useState es un hook
console.log(name);
setName("Alonso");
