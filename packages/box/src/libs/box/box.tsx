import { styled, Theme } from "@husky-ui/core";
import type { CSSObject } from "@husky-ui/core";
import { HTMLAttributes } from "react";
const StyledBox = styled.div(({ theme, sx }: { theme: Theme } & BoxProps) => ({
  ...sx,
}));

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  sx?: CSSObject;
  as?: React.ElementType<any>;
};

export const Box = ({ ...props }: BoxProps) => {
  return <StyledBox {...props}>Hello world 2</StyledBox>;
};

export default Box;
