import { PageContainer } from "../../styled";
import dayjs from "dayjs";
import { useListToday } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";
import TodayList from "../../components/TodayList/TodayList";

const weekdays = {
  0: "Domingo",
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sábado",
};

export default function Today({ setToday }) {
  const user = useContext(UserContext);
  const { today, loading, refreshToday } = useListToday({
    token: user?.token,
    onSuccess: setToday,
  });

  const tasksDone = today?.filter((t) => t.done);
  let percent = tasksDone?.length / today?.length;
  percent = isNaN(percent) ? 0 : percent;

  const subtitle =
    percent === 0
      ? "Nenhum hábito concluído ainda"
      : `${(percent * 100).toFixed()}% dos hábitos concluídos`;

  return (
    <PageContainer percent={percent}>
      <div className="title">
        <div>
          <h2 data-test="today">
            {weekdays[dayjs().day()]}, {dayjs().format("DD/MM")}
          </h2>
          {<h3 data-test="today-counter">{subtitle}</h3>}
        </div>
      </div>
      <TodayList refreshToday={refreshToday} loading={loading} today={today} />
    </PageContainer>
  );
}
