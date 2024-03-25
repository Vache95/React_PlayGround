import { ButtonHTMLAttributes, PropsWithChildren } from "react"
import { ButtonElement } from "./style"


interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  styles?: boolean,
  onClick?: () => void;
  width?: string,
  heigth?: string,
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, width, heigth, onClick, styles }) => {
  return (
    <ButtonElement style={{ width: width, height: heigth }} onClick={onClick} styles={styles} >{children}</ButtonElement>
  )
}

export default Button