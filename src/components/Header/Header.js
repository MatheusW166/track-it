import UserAvatar from "./UserAvatar";
import { HeaderStyle } from "./styled";
import { useContext } from "react";
import UserContext from "../../context/user";
import { AiOutlineLogin } from "react-icons/ai";
import { logOut } from "../../utils/sessionUtils";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyle data-test="header">
      <h1>TrackIt</h1>
      <div>
        <UserAvatar src={user?.image} />
        <button onClick={logOut}>
          <AiOutlineLogin />
        </button>
      </div>
    </HeaderStyle>
  );
}
