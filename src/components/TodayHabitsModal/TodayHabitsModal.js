import { Modal, ModalContainer, ModalListItem, ModalListUl } from "./styled";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

export default function TodayHabitsModal({ date, habits, closeModal }) {
  return (
    <ModalContainer onClick={closeModal}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h3>{date}</h3>
        <ModalListUl>
          {habits.map((habit) => (
            <ModalListItem key={habit.id} done={habit.done}>
              {habit.name}
              <AiFillCheckCircle />
              <MdCancel />
            </ModalListItem>
          ))}
        </ModalListUl>
      </Modal>
    </ModalContainer>
  );
}
