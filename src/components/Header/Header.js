import UserAvatar from "./UserAvatar";
import { HeaderStyle } from "./styled";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>TrackIt</h1>
      <UserAvatar />
    </HeaderStyle>
  );
}
