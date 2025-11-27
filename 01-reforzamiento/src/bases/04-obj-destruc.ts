const person = {
  name: 'Pablo',
  age: 22,
  key: '123',
};

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({key, name, age, rank}: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: rank,
  };
};

const { rank, keyName, user: { name, age } } = useContext(person);

console.log(rank, keyName, name, age);
