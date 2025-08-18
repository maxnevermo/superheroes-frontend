import {
  ButtonSizesEnum,
  ButtonVariantsEnum,
} from "@/enums/ui/buttons/button.ui.enum";
import type { ComponentProps, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type ButtonStylesConfig = {
  size?: ButtonSizesEnum;
  isFullWidth?: boolean;
  isFullHeight?: boolean;
  variant?: ButtonVariantsEnum;
};

type CustomButtonProps = PropsWithChildren<{
  callback?: () => void;
  to?: string;
  config?: ButtonStylesConfig;
}> &
  ComponentProps<"button">;

function CustomButton({
  children,
  to,
  callback,
  config,
  ...props
}: CustomButtonProps) {
  const {
    size = ButtonSizesEnum.Large,
    isFullWidth = false,
    isFullHeight = false,
    variant = ButtonVariantsEnum.Primary,
  } = config ?? {};

  const classes = [
    `${size}-button`,
    "base-button",
    `base-${variant}-button`,
    isFullWidth ? "full-width-button" : "",
    isFullHeight ? "full-height-button" : "",
  ].join(" ");

  if (!to) {
    return (
      <button type="button" onClick={callback} className={classes} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export { CustomButton };
