import { styled, Theme } from "@husky-ui/styled";
import { HTMLAttributes } from "react";
import { alpha, lighten, darken } from "@husky-ui/utilities";

const StyledButtonBase = styled.button(
  ({
    theme: { palette, colors, contrastRatio },
    size = "medium",
    variant = "solid",
    color = "primary",
    isLoading,
    isDisabled,
  }: ButtonBaseProps & { theme: Theme }) => ({
    cursor: isLoading ? "progress" : isDisabled ? "not-allowed" : "pointer",
    transition:
      "box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out, border 0.15s ease-in-out, color 0.15s ease-in-out, opacity 0.15s ease-in-out",
    outline: "none",
    userSelect: "none",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    ...(variant === "solid" && {
      border: "none",
      backgroundColor:
        color === "primary"
          ? palette.primary.main
          : color === "secondary"
          ? palette.secondary.main
          : color === "warning"
          ? palette.warning.main
          : color === "danger"
          ? palette.danger.main
          : color === "info"
          ? palette.info.main
          : color === "success"
          ? palette.success.main
          : color === "light"
          ? colors.white
          : colors.black,
      color:
        color === "primary"
          ? palette.primary.contrast
          : color === "secondary"
          ? palette.secondary.contrast
          : color === "warning"
          ? palette.warning.contrast
          : color === "danger"
          ? palette.danger.contrast
          : color === "info"
          ? palette.info.contrast
          : color === "success"
          ? palette.success.contrast
          : color === "light"
          ? colors.black
          : colors.white,

      ...(!isLoading && {
        "&:hover": {
          backgroundColor:
            color === "primary"
              ? palette.mode === "dark"
                ? lighten(palette.primary.main, contrastRatio)
                : darken(palette.primary.main, contrastRatio)
              : color === "secondary"
              ? palette.mode === "dark"
                ? lighten(palette.secondary.main, contrastRatio)
                : darken(palette.secondary.main, contrastRatio)
              : color === "warning"
              ? palette.mode === "dark"
                ? lighten(palette.warning.main, contrastRatio)
                : darken(palette.warning.main, contrastRatio)
              : color === "danger"
              ? palette.mode === "dark"
                ? lighten(palette.danger.main, contrastRatio)
                : darken(palette.danger.main, contrastRatio)
              : color === "info"
              ? palette.mode === "dark"
                ? lighten(palette.info.main, contrastRatio)
                : darken(palette.info.main, contrastRatio)
              : color === "success"
              ? palette.mode === "dark"
                ? lighten(palette.success.main, contrastRatio)
                : darken(palette.success.main, contrastRatio)
              : color === "light"
              ? colors.gray[100]
              : colors.gray[700],
        },
        "&:focus": {
          backgroundColor:
            color === "primary"
              ? palette.mode === "dark"
                ? lighten(palette.primary.main, contrastRatio)
                : darken(palette.primary.main, contrastRatio)
              : color === "secondary"
              ? palette.mode === "dark"
                ? lighten(palette.secondary.main, contrastRatio)
                : darken(palette.secondary.main, contrastRatio)
              : color === "warning"
              ? palette.mode === "dark"
                ? lighten(palette.warning.main, contrastRatio)
                : darken(palette.warning.main, contrastRatio)
              : color === "danger"
              ? palette.mode === "dark"
                ? lighten(palette.danger.main, contrastRatio)
                : darken(palette.danger.main, contrastRatio)
              : color === "info"
              ? palette.mode === "dark"
                ? lighten(palette.info.main, contrastRatio)
                : darken(palette.info.main, contrastRatio)
              : color === "success"
              ? palette.mode === "dark"
                ? lighten(palette.success.main, contrastRatio)
                : darken(palette.success.main, contrastRatio)
              : color === "light"
              ? colors.gray[100]
              : colors.gray[700],

          boxShadow: `0px 0px 0px ${
            size === "small" ? 3 : size === "medium" ? 3 : 4
          }px ${alpha(
            color === "primary"
              ? palette.primary.main
              : color === "secondary"
              ? palette.secondary.main
              : color === "warning"
              ? palette.warning.main
              : color === "danger"
              ? palette.danger.main
              : color === "info"
              ? palette.info.main
              : color === "success"
              ? palette.success.main
              : palette.mode === "light"
              ? colors.gray[600]
              : colors.gray[300],
            0.3
          )}`,
        },
      }),
      ...(isDisabled && {
        "&:disabled": {
          backgroundColor:
            palette.mode === "light" ? colors.gray[200] : colors.gray[700],
          color: palette.mode === "light" ? colors.gray[400] : colors.gray[500],
          boxShadow: "none",
        },
      }),
    }),
  })
);

export type ButtonBaseProps = HTMLAttributes<HTMLButtonElement> & {
  /**
   * The size of the button.
   * @default "medium"
   * @type "small" | "medium" | "large"
   * @example
   * <ButtonBase size="small">Button</ButtonBase>
   */
  size?: "small" | "medium" | "large";
  /**
   * Change the variant of the button.
   * @default "solid"
   * @type "solid" | "outline" | "ghost"
   * @example
   * <ButtonBase variant="outline">Button</ButtonBase>
   */
  variant?: "solid" | "outline" | "ghost";
  /**
   * Change the color of the button.
   * @default "primary"
   * @type "primary" | "secondary" | "warning" | "danger" | "info" | "success" | "light" | "dark"
   * @example
   * <ButtonBase color="success">Button</ButtonBase>
   */
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark";

  /**
   * Set the button to be disabled.
   * @default false
   * @type boolean
   * @example
   * <ButtonBase isDisabled={true}>Button</ButtonBase>
   */
  isDisabled?: boolean;
  /**
   * Set the button to be loading.
   * @default false
   * @type boolean
   * @example
   * <ButtonBase isLoading={true}>Button</ButtonBase>
   */
  isLoading?: boolean;

  as?: React.ElementType<any>;
};

export const ButtonBase = ({ ...props }: ButtonBaseProps) => {
  return (
    <StyledButtonBase
      disabled={props.isDisabled || props.isLoading}
      {...props}
    />
  );
};

export default ButtonBase;
