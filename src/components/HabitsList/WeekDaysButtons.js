import { WeekDaysContainer, WeekDayCheckLabel } from "./styled";

const weekdays = {
  0: "D",
  1: "S",
  2: "T",
  3: "Q",
  4: "Q",
  5: "S",
  6: "S",
};

export default function WeekDaysButtons({
  onChange,
  days = [],
  readOnly = true,
  disabled = false,
}) {
  return (
    <WeekDaysContainer>
      {Object.keys(weekdays).map((d) => {
        return (
          <WeekDayCheckLabel disabled={disabled} data-test="habit-day" key={d}>
            {weekdays[Number(d)]}
            <input
              disabled={disabled}
              name="day"
              onChange={onChange}
              readOnly={readOnly}
              value={d}
              checked={days.includes(Number(d))}
              type="checkbox"
            />
          </WeekDayCheckLabel>
        );
      })}
    </WeekDaysContainer>
  );
}
