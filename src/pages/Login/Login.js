import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import CustomButton from "../../components/CustomButton/CustomButton";
import { RegisterContainer, CustomForm, CustomInput } from "../../styled";
import { useLogin } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import { setCurrentUser } from "../../utils/sessionUtils";
import UserContext from "../../context/user";

export default function LogIn() {
  const { loading, login } = useLogin();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function onSuccess(user) {
    setUser(user);
    setCurrentUser(user);
    navigate(ROUTES.today);
  }

  function onError(err) {
    const serverError = err?.response?.data;
    alert(
      serverError.message || "Não foi possível fazer o login, tente novamente."
    );
  }

  function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const email = form["email"].value;
    const password = form["password"].value;

    login({ email, password }, onSuccess, onError);
  }

  return (
    <RegisterContainer>
      <Logo />
      <CustomForm onSubmit={handleLogin}>
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
        <CustomButton dataTest="login-btn" disabled={loading} type="submit">
          Entrar
        </CustomButton>
      </CustomForm>
      <p>
        <Link data-test="signup-link" to={ROUTES.signUp}>
          Não tem uma conta? Cadastre-se!
        </Link>
      </p>
    </RegisterContainer>
  );
}
