import { PageContainer } from "../../styled";
import dayjs from "dayjs";
import { useListToday } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";
import TodayList from "../../components/TodayList/TodayList";

const weekdays = {
  1: "Domingo",
  2: "Segunda",
  3: "Terça",
  4: "Quarta",
  5: "Quinta",
  6: "Sexta",
  7: "Sábado",
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
          <h2>
            {weekdays[dayjs().day()]}, {dayjs().format("DD/MM")}
          </h2>
          {!loading && <h3>{subtitle}</h3>}
        </div>
      </div>
      <TodayList refreshToday={refreshToday} loading={loading} today={today} />
    </PageContainer>
  );
}
