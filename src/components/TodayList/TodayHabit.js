import { TodayHabitStyle } from "./styled";
import { BsCheckLg } from "react-icons/bs";
import { useMarkHabit } from "../../hooks/trackItApiHooks";
import { useContext, useState } from "react";
import UserContext from "../../context/user";

export default function TodayHabit({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  refreshToday,
}) {
  const user = useContext(UserContext);
  const { markHabit } = useMarkHabit();
  const [isDone, setIsDone] = useState(done);

  function onSuccess() {
    refreshToday();
  }

  function handleMarkHabit() {
    markHabit({ done, id, token: user?.token }, onSuccess);
    setIsDone(!done);
  }

  function daysPhrase(days) {
    return (
      <span>
        {days} {days === 1 ? "dia" : "dias"}
      </span>
    );
  }

  return (
    <TodayHabitStyle
      data-test="today-habit-container"
      record={currentSequence === highestSequence}
      done={isDone}
      key={id}>
      <div className="info">
        <h3 data-test="today-habit-name">{name}</h3>
        <p data-test="today-habit-sequence">
          Sequência de dias: {daysPhrase(currentSequence)}
        </p>
        <p data-test="today-habit-record">
          Seu recorde: {daysPhrase(highestSequence)}
        </p>
      </div>
      <div
        data-test="today-habit-check-btn"
        onClick={handleMarkHabit}
        className="check">
        <BsCheckLg />
      </div>
    </TodayHabitStyle>
  );
}
