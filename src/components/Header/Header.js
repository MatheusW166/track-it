import UserAvatar from "./UserAvatar";
import { HeaderStyle } from "./styled";
import { useContext } from "react";
import UserContext from "../../context/user";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyle data-test="header">
      <h1>TrackIt</h1>
      <UserAvatar src={user?.image} />
    </HeaderStyle>
  );
}
