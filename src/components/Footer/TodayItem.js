import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import THEME from "../../theme";
import { ProgressContainer } from "./styled";

export default function TodayItem({ value = 0.0, children, to }) {
  return (
    <Link data-test="today-link" to={to}>
      <ProgressContainer>
        <p>{children}</p>
        <CircularProgressbar
          background={true}
          value={value}
          maxValue="1"
          backgroundPadding={6}
          styles={{
            path: {
              stroke: THEME.bg,
              strokeLinecap: "round",
            },
            background: { fill: THEME.accent },
          }}
        />
      </ProgressContainer>
    </Link>
  );
}
