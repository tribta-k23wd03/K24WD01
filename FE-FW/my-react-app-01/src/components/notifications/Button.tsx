interface Props {
  onClick: () => void;
}

function Button({ onClick }: Props) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Click to Alert
    </button>
  );
}

export default Button;
