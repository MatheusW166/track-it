import { WeekDaysContainer, WeekDayCheckLabel } from "./styled";

const weekdays = {
  1: "D",
  2: "S",
  3: "T",
  4: "Q",
  5: "Q",
  6: "S",
  7: "S",
};

export default function WeekDaysButtons({ days }) {
  return (
    <WeekDaysContainer>
      {Object.keys(weekdays).map((d) => {
        return (
          <WeekDayCheckLabel key={d}>
            {weekdays[d]}
            {days ? (
              <input
                readOnly
                value={d}
                checked={days.includes(Number(d))}
                type="checkbox"
              />
            ) : (
              <input value={d} name="day" type="checkbox" />
            )}
          </WeekDayCheckLabel>
        );
      })}
    </WeekDaysContainer>
  );
}
