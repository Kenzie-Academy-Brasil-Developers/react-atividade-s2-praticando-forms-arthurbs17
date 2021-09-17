import "./index.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

const Form = ({ setUsers }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    nome: yup
      .string()
      .max(18, "18 caracteres no máximo")
      .required("Campo obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "8 caracteres no minímo")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Senha fraca"
      )
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    username: yup
      .string()
      .max(8, "8 caracteres no máximo")
      .matches(
        /^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/,
        "Só pode conter letras e números"
      )
      .required("Campo obrigatório"),
    telefone: yup
      .string("Só números permitidos")
      .max(11, "Ex: 81987654321")
      .required("Campo obrigatório")
      .matches(
        /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
        "Só números permitidos, ex: 81987654321"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    console.log(data);
    setUsers(data);
    history.push("/usercard");
  };

  let className = "inputSec";
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)} className="form">
        <input {...register("nome")} placeholder="Nome" className={className} />
        {errors.nome?.message && (
          <span className="msgError">{errors.nome.message}</span>
        )}
        <input
          {...register("email")}
          placeholder="E-mail"
          className={className}
        />
        {errors.email?.message && (
          <span className="msgError">{errors.email.message}</span>
        )}
        <input
          {...register("password")}
          placeholder="Senha"
          className={className}
          type="password"
        />
        {errors.password?.message && (
          <span className="msgError">{errors.password.message}</span>
        )}
        <input
          {...register("confirmPassword")}
          placeholder="Confirme a senha"
          className={className}
          type="password"
        />
        {errors.confirmPassword?.message && (
          <span className="msgError">{errors.confirmPassword.message}</span>
        )}
        <input
          {...register("username")}
          placeholder="Username"
          className={className}
        />
        {errors.username?.message && (
          <span className="msgError">{errors.username.message}</span>
        )}
        <input
          {...register("telefone")}
          placeholder="Telefone"
          className={className}
        />
        {errors.telefone?.message && (
          <span className="msgError">{errors.telefone.message}</span>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
