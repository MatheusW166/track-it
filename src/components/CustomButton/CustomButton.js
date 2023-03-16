import CustomButtonStyle from "./styled";
import Loader from "../Loader/Loader";

export default function CustomButton({
  showLoading = true,
  children,
  disabled,
  dataTest,
  ...props
}) {
  return (
    <CustomButtonStyle data-test={dataTest} disabled={disabled} {...props}>
      {disabled && showLoading ? <Loader /> : children}
    </CustomButtonStyle>
  );
}
