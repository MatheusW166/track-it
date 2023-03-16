import styled from "styled-components";

const HeaderStyle = styled.header`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.accentVariant};
  width: 100%;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-family: "Playball", "cursive";
    color: ${({ theme }) => theme.overAccent};
    font-size: 38px;
    font-weight: 400;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export { HeaderStyle };
