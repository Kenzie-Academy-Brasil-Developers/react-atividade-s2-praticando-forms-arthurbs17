import { useHistory } from "react-router";
import "./index.css";
const UserCard = ({ list }) => {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <ul className="card">
        <li>Nome: {list.nome}</li>
        <li>Username: {list.username}</li>
        <li>E-mail: {list.email}</li>
        <li>Fone: {list.telefone}</li>
      </ul>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default UserCard;
