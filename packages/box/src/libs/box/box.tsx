import { BaseElement, BaseElementProps } from "@husky-ui/styled";
import { ElementType } from "react";

export type BoxProps = BaseElementProps<"div"> & {};

export function Box<T extends ElementType = "div">(
  props: BaseElementProps<"div"> & BoxProps
) {
  const { as, ...rest } = props;
  return <BaseElement as={as} {...rest} />;
}

export default Box;
