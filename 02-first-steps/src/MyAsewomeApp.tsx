const firstName = "Pablo";
const lastName = "Alonso";
const isActive = true;

export const MyAwesomeApp = () => {
  return (
    <div>
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{2 + 2}</p>
      <h1>{isActive ? "Activo" : "No activo"}</h1>
    </div>
  );
};
