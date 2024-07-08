interface Props {
  children: string;
  color?: "outline-primary" | "outline-secondary" | "outline-danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "outline-primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
