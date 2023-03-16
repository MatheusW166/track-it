import { Link } from "react-router-dom";
import { FooterStyle } from "./styled";
import TodayItem from "./TodayItem";
import { ROUTES } from "../../routes";
import { useContext } from "react";
import UserContext from "../../context/user";

export default function Footer() {
  const user = useContext(UserContext);

  console.log(user);

  return (
    <FooterStyle>
      <nav>
        <Link to={ROUTES.habits}>Hábitos</Link>
        <TodayItem to={ROUTES.today} value={0.4}>
          Hoje
        </TodayItem>
        <Link to={ROUTES.history}>Histórico</Link>
      </nav>
    </FooterStyle>
  );
}
