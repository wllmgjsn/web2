import type { User } from "../../types";

const UserCard = (props: User) => {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <p>Age : {props.age}</p>
      <div className={props.online ? "online" : "offline"}>
        {props.online ? "En ligne" : "Hors ligne"}
      </div>
    </div>
  );
};

export default UserCard;
