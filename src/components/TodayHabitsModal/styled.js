import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 5px;
  width: min(100%, 500px);
  overflow: hidden;

  h3 {
    padding: 16px;
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.accentVariant};
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: ${({ theme }) => theme.bgVariant};
  }
`;

const ModalListUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ModalListItem = styled.li`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:nth-child(even) {
    background: ${({ theme }) => theme.bgVariant};
  }

  svg {
    font-size: 18px;
  }

  svg:first-child {
    display: ${({ done }) => !done && "none"};
    color: ${({ theme }) => theme.taskDone};
  }

  svg:last-child {
    display: ${({ done }) => done && "none"};
    color: ${({ theme }) => theme.noTaskDone};
  }
`;

export { Modal, ModalContainer, ModalListItem, ModalListUl };
