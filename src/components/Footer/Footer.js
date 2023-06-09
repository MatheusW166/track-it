import { Link } from "react-router-dom";
import { FooterStyle } from "./styled";
import TodayItem from "./TodayItem";
import { ROUTES } from "../../routes";
import { useContext } from "react";
import TodayContext from "../../context/today";

export default function Footer() {
  const { today } = useContext(TodayContext);

  const tasksDone = today?.filter((t) => t.done);
  const percent = tasksDone?.length / today?.length;

  return (
    <FooterStyle>
      <nav data-test="menu">
        <Link data-test="habit-link" to={ROUTES.habits}>
          Hábitos
        </Link>
        <TodayItem to={ROUTES.today} value={isNaN(percent) ? 0 : percent}>
          Hoje
        </TodayItem>
        <Link data-test="history-link" to={ROUTES.history}>
          Histórico
        </Link>
      </nav>
    </FooterStyle>
  );
}
