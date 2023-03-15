import { Link } from "react-router-dom";
import { FooterStyle } from "./styled";
import TodayItem from "./TodayItem";
import { ROUTES } from "../../routes";

export default function Footer() {
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
