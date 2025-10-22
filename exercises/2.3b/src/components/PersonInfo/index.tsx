interface PersonProps {
  name: string;
  age: number;
}

const PersonInfo = (props: PersonProps) => {
  return (
    // Ici 2 éléments -> div obligatoire !
    <div>
      <h2>{props.name}</h2>
      <p>Age : {props.age}</p>
    </div>
  );
};

export default PersonInfo;
