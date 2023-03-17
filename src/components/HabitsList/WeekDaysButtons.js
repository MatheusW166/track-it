import { WeekDaysContainer, WeekDayCheckLabel } from "./styled";

const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function WeekDaysButtons({
  onChange,
  days = [],
  readOnly = true,
  disabled = false,
}) {
  return (
    <WeekDaysContainer>
      {weekdays.map((day, idx) => {
        return (
          <WeekDayCheckLabel
            disabled={disabled}
            data-test="habit-day"
            key={idx}>
            {day}
            <input
              disabled={disabled}
              name="day"
              onChange={onChange}
              readOnly={readOnly}
              value={idx}
              checked={days.includes(idx)}
              type="checkbox"
            />
          </WeekDayCheckLabel>
        );
      })}
    </WeekDaysContainer>
  );
}
