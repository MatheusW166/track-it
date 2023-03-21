import { Calendar } from "react-calendar";
import { PageContainer } from "../../styled";
import "react-calendar/dist/Calendar.css";
import { useDailyHistory } from "../../hooks/trackItApiHooks";
import { useContext, useState } from "react";
import UserContext from "../../context/user";
import Loader from "../../components/Loader/Loader";
import dayjs from "dayjs";
import { dateToLocaleString } from "../../utils/dateUtils";
import TodayHabitsModal from "../../components/TodayHabitsModal/TodayHabitsModal";
import { useRedirectUnlogged } from "../../hooks/sessionHooks";

export default function History() {
  useRedirectUnlogged();
  const { user } = useContext(UserContext);
  const { history, loading } = useDailyHistory({ token: user?.token });
  const [dateSelected, setDateSelected] = useState();

  const historyHash = {};
  history?.forEach((hist) => (historyHash[hist.day] = hist));

  function tileDateClassContent({ date }) {
    const dateConverted = dateToLocaleString(date);
    const dayHabits = historyHash[dateConverted];

    if (!dayHabits || dateConverted === dateToLocaleString(new Date())) {
      return null;
    }
    if (dayHabits.habits.some((habit) => !habit.done)) {
      return <div className="undone"></div>;
    }
    return <div className="all-done"></div>;
  }

  function onClickDay(date) {
    setDateSelected(dateToLocaleString(date));
  }

  return (
    <PageContainer>
      <div className="title">
        <h2>Histórico</h2>
      </div>
      {historyHash[dateSelected] && (
        <TodayHabitsModal
          date={dateSelected}
          habits={historyHash[dateSelected]?.habits}
          closeModal={() => setDateSelected(null)}
        />
      )}
      {loading ? (
        <Loader isDarker />
      ) : (
        <Calendar
          data-test="calendar"
          tileClassName="tile"
          tileContent={tileDateClassContent}
          className="calendar"
          formatDay={(_, date) => dayjs(date).format("DD")}
          onClickDay={onClickDay}
        />
      )}
    </PageContainer>
  );
}
