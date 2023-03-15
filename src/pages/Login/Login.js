import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import CustomButton from "../../components/CustomButton/CustomButton";
import { RegisterContainer, CustomForm, CustomInput } from "../../styled";

export default function LogIn() {
  function handleLogin(e) {
    e.preventDefault();
    console.log("Login!");
  }

  return (
    <RegisterContainer>
      <Logo />
      <CustomForm onSubmit={handleLogin}>
        <CustomInput required name="email" type="email" placeholder="email" />
        <CustomInput
          required
          name="password"
          type="password"
          placeholder="senha"
        />
        <Link to={ROUTES.habits}>
          <CustomButton type="submit">Entrar</CustomButton>
        </Link>
      </CustomForm>
      <p>
        <Link to={ROUTES.signUp}>Não tem uma conta? Cadastre-se!</Link>
      </p>
    </RegisterContainer>
  );
}
