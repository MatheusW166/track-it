import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import CustomButton from "../../components/CustomButton/CustomButton";
import { RegisterContainer, CustomForm, CustomInput } from "../../styled";
import { useSignUp } from "../../hooks/trackItApiHooks";

export default function SignUp() {
  const { loading, signUp } = useSignUp();
  const navigate = useNavigate();

  function onSuccess(_) {
    navigate(ROUTES.login);
  }

  function onError(err) {
    const serverError = err?.response?.data;
    alert(
      serverError.message ||
        "Não foi possível fazer o cadastro, tente novamente."
    );
  }

  function handleSignUp(e) {
    e.preventDefault();
    const form = e.target;
    const email = form["email"].value;
    const password = form["password"].value;
    const name = form["name"].value;
    const image = form["photo"].value;

    signUp({ email, password, image, name }, onSuccess, onError);
  }

  return (
    <RegisterContainer>
      <Logo />
      <CustomForm onSubmit={handleSignUp}>
        <CustomInput
          disabled={loading}
          required
          name="email"
          type="email"
          placeholder="email"
          data-test="email-input"
        />
        <CustomInput
          disabled={loading}
          required
          name="password"
          type="password"
          placeholder="senha"
          data-test="password-input"
        />
        <CustomInput
          disabled={loading}
          required
          name="name"
          type="text"
          placeholder="nome"
          data-test="user-name-input"
        />
        <CustomInput
          disabled={loading}
          required
          name="photo"
          type="url"
          placeholder="foto"
          data-test="user-image-input"
        />
        <CustomButton dataTest="signup-btn" disabled={loading} type="submit">
          Cadastrar
        </CustomButton>
      </CustomForm>
      <p>
        <Link data-test="login-link" to={ROUTES.login}>
          Já tem uma conta? Faça login!
        </Link>
      </p>
    </RegisterContainer>
  );
}
