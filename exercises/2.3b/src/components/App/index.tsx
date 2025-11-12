import Footer from "../Footer";
import PageTitle from "../PageTitle";
import PersonInfo from "../PersonInfo";
import type { User } from "../../types";

const App = () => {
  const title = "Welcome to My App";
  
  const users: User[] = [
    {name: "Alice"    ,age: 25},
    {name: "Bob"      ,age: 30},
    {name: "Charlie"  ,age: 35}
  ];

  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title}></PageTitle>
      
      {users.map((user) => (
        <div>
          <h2>{user.name}</h2>
          <p>Age : {user.age}</p>
        </div>
      ))}

      <Footer text={footerText}></Footer>
    </div>
  );
};

export default App;

/**
 * Les accollades {} nous permettent d'écrire du script à l'intérieur d'une partie HTML
 * C'est d'ailleurs pour ça qu'on arrive à écrire un commentaire comme celui-ci
 * Notez qu'au dessus, la fonction anonyme utilise () et non {} pour le retour
 * () permet simplement d'éviter de devoir écrire 'return ...'
 */
