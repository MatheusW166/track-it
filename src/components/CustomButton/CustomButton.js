import CustomButtonStyle from "./styled";
import Loader from "../Loader/Loader";

export default function CustomButton({
  showLoading = true,
  children,
  disabled,
  ...props
}) {
  return (
    <CustomButtonStyle disabled={disabled} {...props}>
      {disabled && showLoading ? <Loader /> : children}
    </CustomButtonStyle>
  );
}
