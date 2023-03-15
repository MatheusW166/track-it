const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&usqp=CAU";

export default function UserAvatar({ src }) {
  return (
    <img
      src={src || DEFAULT_IMAGE}
      alt="user"
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = DEFAULT_IMAGE;
      }}
    />
  );
}
