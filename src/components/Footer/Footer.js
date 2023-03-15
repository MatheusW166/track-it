import { Link } from "react-router-dom";
import { FooterStyle } from "./styled";
import TodayItem from "./TodayItem";

export default function Footer() {
  return (
    <FooterStyle>
      <nav>
        <Link>Hábitos</Link>
        <TodayItem value={0.4}>Hoje</TodayItem>
        <Link>Histórico</Link>
      </nav>
    </FooterStyle>
  );
}
