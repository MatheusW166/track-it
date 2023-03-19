import { Calendar } from "react-calendar";
import { PageContainer } from "../../styled";
import "react-calendar/dist/Calendar.css";
import { useDailyHistory } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";
import Loader from "../../components/Loader/Loader";
import dayjs from "dayjs";

const LOCALE = "pt-BR";
const TIMEZONE = "UTC";

export default function History() {
  const { user } = useContext(UserContext);
  const { history, loading } = useDailyHistory({ token: user?.token });

  const historyHash = {};
  history?.forEach((hist) => (historyHash[hist.day] = hist));

  function dateString(date) {
    return date.toLocaleString(LOCALE, { timeZone: TIMEZONE }).split(",")[0];
  }

  function tileDateClassContent({ date }) {
    const dateConverted = dateString(date);
    const dayHabits = historyHash[dateConverted];
    if (!dayHabits || dateConverted === dateString(new Date())) {
      return null;
    }
    if (dayHabits.habits.some((habit) => !habit.done)) {
      return <div className="undone"></div>;
    }
    return <div className="all-done"></div>;
  }

  return (
    <PageContainer>
      <div className="title">
        <h2>Histórico</h2>
      </div>
      {loading ? (
        <Loader isDarker />
      ) : (
        <Calendar
          tileClassName="tile"
          tileContent={tileDateClassContent}
          className="calendar"
          formatDay={(_, date) => dayjs(date).format("DD")}
        />
      )}
    </PageContainer>
  );
}
