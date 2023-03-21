import UserAvatar from "./UserAvatar";
import { HeaderStyle } from "./styled";
import { useContext } from "react";
import UserContext from "../../context/user";
import { AiOutlineLogin } from "react-icons/ai";
import { logOut } from "../../utils/sessionUtils";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyle data-test="header">
      <h1>TrackIt</h1>
      <div>
        <UserAvatar src={user?.image} />
        <Link to={ROUTES.login} onClick={logOut}>
          <button>
            <AiOutlineLogin />
          </button>
        </Link>
      </div>
    </HeaderStyle>
  );
}
