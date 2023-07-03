import { forwardRef, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ name, onClick, type, ...rest }, ref) => {
    return (
      <StyledButton type={type} onClick={onClick} ref={ref} {...rest}>
        {name}
      </StyledButton>
    );
  }
);
