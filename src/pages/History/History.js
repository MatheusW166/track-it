import { Calendar } from "react-calendar";
import { PageContainer } from "../../styled";
import "react-calendar/dist/Calendar.css";
import { useDailyHistory } from "../../hooks/trackItApiHooks";
import { useContext } from "react";
import UserContext from "../../context/user";
import Loader from "../../components/Loader/Loader";

export default function History() {
  const { user } = useContext(UserContext);
  const { loading } = useDailyHistory({ token: user?.token });

  function tileDateClassName({ date }) {
    const tileClasses = ["tile"];
    if (date.getDay() === 0) {
      tileClasses.push("sunday");
    }
    return tileClasses.join(" ");
  }

  return (
    <PageContainer>
      <div className="title">
        <h2>Histórico</h2>
      </div>
      {loading ? (
        <Loader isDarker />
      ) : (
        <Calendar
          tileClassName={tileDateClassName}
          className="calendar"
          value={new Date()}
        />
      )}
    </PageContainer>
  );
}
