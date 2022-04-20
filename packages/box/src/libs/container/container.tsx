import { Breakpoints, OverwritableType } from "@husky-ui/styled";
import { ElementType } from "react";
import { Box, BoxProps } from "../box/box";

export interface ContainerProps<T extends ElementType> extends BoxProps<T> {
  maxWidth?: keyof Breakpoints;
}

export function Container<T extends ElementType = "div">(
  props: OverwritableType<ContainerProps<T>, T>
) {
  const { as, sx, maxWidth = "xl", ...rest } = props;
  return (
    <Box
      as={as as any}
      css={(theme) => [
        sx,
        {
          display: "block",
          width: "100%",
          maxWidth: theme.breakpoints[maxWidth],
          marginInline: "auto",
          paddingInline: theme.spacing(2),
        },
      ]}
      {...rest}
    />
  );
}

export default Container;
