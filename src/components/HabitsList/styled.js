import styled from "styled-components";

const HabitsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
  position: relative;
  flex: 1;

  & > .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HabitContainerForm = styled.form`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.bg};
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;

  input {
    max-width: 100%;
    margin-bottom: 8px;
  }

  div:last-child {
    display: flex;
    justify-content: end;
    gap: 16px;
    margin-top: 32px;
  }

  button {
    font-size: 16px;
    height: 35px;
    padding: 0 16px;
  }

  button {
    min-width: 90px;
  }
`;

const HabitContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: 91px;
  background: ${({ theme }) => theme.bg};
  border-radius: 5px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 19px;
    font-weight: 400;
  }

  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const WeekDaysContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const WeekDayCheckLabel = styled.label`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 19px;
  text-transform: uppercase;
  display: grid;
  place-content: center;

  background: ${({ theme }) => theme.input.unchecked.bg};
  border: solid 1px ${({ theme }) => theme.input.border};
  color: ${({ theme }) => theme.input.unchecked.text};
  position: relative;

  input {
    visibility: hidden;
    height: 0;
    width: 0;
    position: absolute;
  }

  &:has(input:checked) {
    background: ${({ theme }) => theme.input.checked.bg};
    border: solid 1px ${({ theme }) => theme.input.checked.border};
    color: ${({ theme }) => theme.input.checked.text};
  }
`;

export {
  HabitContainer,
  HabitsListContainer,
  WeekDayCheckLabel,
  WeekDaysContainer,
  HabitContainerForm,
};
