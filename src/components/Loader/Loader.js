import LoaderContainer from "./styled";

export default function Loader({ isDarker }) {
  return (
    <LoaderContainer isDarker={isDarker} className="loader"></LoaderContainer>
  );
}
