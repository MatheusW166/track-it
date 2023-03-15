import styled from "styled-components";

const FooterStyle = styled.footer`
  height: 70px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.bg};

  nav {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    font-size: 18px;
    color: ${({ theme }) => theme.accent};
  }
`;

const ProgressContainer = styled.div`
  width: 90px;
  height: 90px;
  transform: translateY(-20px);
  position: relative;
  p {
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.overAccent};
  }
`;

export { FooterStyle, ProgressContainer };
