import {
  BaseElement,
  BaseElementProps,
  OverwritableType,
} from "@husky-ui/styled";
import { ElementType } from "react";

export interface BoxProps<T extends ElementType> extends BaseElementProps<T> {}

export function Box<T extends ElementType = "div">(
  props: OverwritableType<BoxProps<T>, T>
) {
  const { as, ...rest } = props;
  return <BaseElement as={as as any} {...rest} />;
}

export default Box;
