import styled from "styled-components";

const TodayListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
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

const TodayHabitStyle = styled.div`
  width: 100%;
  height: 90px;
  padding: 12px;
  background: ${({ theme }) => theme.bg};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  .check {
    height: 100%;
    aspect-ratio: 1/1;
    background: ${({ theme, done }) =>
      done ? theme.taskDone : theme.taskUndone};
    color: ${({ theme }) => theme.bg};
    border-radius: 5px;
    font-size: 48px;
    display: grid;
    place-content: center;

    svg {
      stroke-width: 0.5px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 400;
      font-size: 19px;
      margin-bottom: auto;
    }

    p {
      font-size: 12px;
      &:not(:last-child) {
        margin-bottom: 4px;
        span {
          color: ${({ theme, done }) => done && theme.taskDone};
        }
      }
      &:last-child {
        span {
          color: ${({ theme, record }) => record && theme.taskDone};
        }
      }
    }
  }
`;

export { TodayHabitStyle, TodayListStyle };
