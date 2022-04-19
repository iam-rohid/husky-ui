import { ReactNode } from "react";
import { styled, Theme } from "@husky-ui/core";
import ButtonBase, { ButtonBaseProps } from "../button-base/button-base";

const StyledButton = styled(ButtonBase)(
  ({
    theme: { spacing, borderRadius },
    size = "medium",
    fullWidth,
  }: { theme: Theme } & ButtonProps) => ({
    ...(fullWidth && {
      width: "100%",
    }),
    gap:
      size === "small"
        ? spacing(1.5)
        : size === "medium"
        ? spacing(2)
        : spacing(2.5),
    fontSize:
      size === "small"
        ? spacing(3.5)
        : size === "medium"
        ? spacing(4)
        : spacing(4.5),
    lineHeight:
      size === "small"
        ? spacing(7)
        : size === "medium"
        ? spacing(7.5)
        : spacing(8),
    paddingInline:
      size === "small"
        ? spacing(3.5)
        : size === "medium"
        ? spacing(4)
        : spacing(4.5),
    paddingBlock:
      size === "small"
        ? spacing(0.5)
        : size === "medium"
        ? spacing(1)
        : spacing(1.5),
    borderRadius:
      size === "small"
        ? borderRadius(1.5)
        : size === "medium"
        ? borderRadius(2)
        : borderRadius(2.5),
    fontWeight: size === "small" ? 400 : size === "medium" ? 500 : 500,
  })
);

const StyledIcon = styled.span(
  ({
    theme,
    size,
  }: { theme: Theme } & {
    size: ButtonProps["size"];
    side?: "left" | "right";
  }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize:
      size === "small"
        ? theme.spacing(5)
        : size === "medium"
        ? theme.spacing(5.5)
        : theme.spacing(6),
  })
);

const StyledLabel = styled.span(({ theme }: { theme: Theme }) => ({
  flex: 1,
}));

export type ButtonProps = ButtonBaseProps & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
};

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {leftIcon && (
        <StyledIcon side="left" size={props.size}>
          {leftIcon}
        </StyledIcon>
      )}
      <StyledLabel>{children}</StyledLabel>
      {rightIcon && (
        <StyledIcon side="right" size={props.size}>
          {rightIcon}
        </StyledIcon>
      )}
    </StyledButton>
  );
};

export default Button;
