import UserAvatar from "./UserAvatar";
import { HeaderStyle } from "./styled";
import { useContext } from "react";
import UserContext from "../../context/user";
import { AiOutlineLogin } from "react-icons/ai";
import { deleteCurrent } from "../../utils/sessionUtils";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

function LogOutButton() {
  return (
    <Link to={ROUTES.login} onClick={deleteCurrent}>
      <button>
        <AiOutlineLogin />
      </button>
    </Link>
  );
}

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyle data-test="header">
      <h1>TrackIt</h1>
      <div>
        <UserAvatar src={user?.image} />
        <LogOutButton />
      </div>
    </HeaderStyle>
  );
}
