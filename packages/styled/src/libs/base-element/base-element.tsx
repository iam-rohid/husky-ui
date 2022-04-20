import { ElementType } from "react";
import { StyledObject } from "../../types";

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export type Prefer<P, T> = P & Omit<T, keyof P>;
export type ElementPropsWithoutRef<T extends ElementType> = Pick<
  React.ComponentPropsWithoutRef<T>,
  keyof React.ComponentPropsWithoutRef<T>
>;
export type OverwritableType<OwnProps, Type extends ElementType> = Prefer<
  OwnProps,
  ElementPropsWithoutRef<Type>
>;

export type BaseElementProps<T extends ElementType> = {
  as?: T;
  sx?: StyledObject;
};
export function BaseElement<T extends ElementType = "div">(
  props: OverwritableType<BaseElementProps<T>, T>
) {
  const { as: Component = "div" as any, sx, ...rest } = props;
  return <Component css={sx} {...rest} />;
}

export default BaseElement;
