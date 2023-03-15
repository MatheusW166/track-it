import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import CustomButton from "../../components/CustomButton/CustomButton";
import { RegisterContainer, CustomForm, CustomInput } from "../../styled";

export default function SignUp() {
  function handleSignUp(e) {
    e.preventDefault();
    console.log("Cadastro!");
  }

  return (
    <RegisterContainer>
      <Logo />
      <CustomForm onSubmit={handleSignUp}>
        <CustomInput required name="email" type="email" placeholder="email" />
        <CustomInput
          required
          name="password"
          type="password"
          placeholder="senha"
        />
        <CustomInput required name="name" type="text" placeholder="nome" />
        <CustomInput required name="photo" type="url" placeholder="foto" />
        <CustomButton type="submit">Cadastrar</CustomButton>
      </CustomForm>
      <p>
        <Link to={ROUTES.login}>Já tem uma conta? Faça login!</Link>
      </p>
    </RegisterContainer>
  );
}
