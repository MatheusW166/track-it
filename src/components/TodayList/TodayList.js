import { TodayListStyle } from "./styled";
import TodayHabit from "./TodayHabit";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import TodayContext from "../../context/today";

export default function TodayList() {
  const { today, loading } = useContext(TodayContext);
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
          />
        ))
      )}
    </TodayListStyle>
  );
}
