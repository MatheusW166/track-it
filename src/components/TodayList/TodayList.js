import { TodayListStyle } from "./styled";
import TodayHabit from "./TodayHabit";
import Loader from "../Loader/Loader";

export default function TodayList({ refreshToday, today, loading }) {
  return (
    <TodayListStyle>
      {loading ? (
        <Loader isDarker={true} />
      ) : (
        today.map((t) => (
          <TodayHabit
            key={t.id}
            name={t.name}
            id={t.id}
            currentSequence={t.currentSequence}
            highestSequence={t.highestSequence}
            done={t.done}
            refreshToday={refreshToday}
          />
        ))
      )}
    </TodayListStyle>
  );
}
