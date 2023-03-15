import CustomButtonStyle from "./styled";
import Loader from "../Loader/Loader";

export default function CustomButton({ children, disabled, ...props }) {
  return (
    <CustomButtonStyle disabled={disabled} {...props}>
      {disabled ? <Loader /> : children}
    </CustomButtonStyle>
  );
}
