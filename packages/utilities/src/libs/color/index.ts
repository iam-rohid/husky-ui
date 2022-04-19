import Color from "color";

export const alpha = (color: string, alpha: number) => {
  const c = Color(color);
  return c.alpha(alpha).toString();
};

export const fade = (color: string, fade: number) => {
  const c = Color(color);
  return c.fade(fade).hex();
};

export const isDark = (color: string): boolean => {
  const c = Color(color);
  return c.isDark();
};
export const isLight = (color: string): boolean => {
  const c = Color(color);
  return c.isLight();
};

export const darken = (color: string, amount: number) => {
  const c = Color(color);
  return c.darken(amount).hex();
};

export const lighten = (color: string, amount: number) => {
  const c = Color(color);
  return c.lighten(amount).hex();
};

export const whiten = (color: string, amount: number) => {
  const c = Color(color);
  return c.whiten(amount).hex();
};

export const blacken = (color: string, amount: number) => {
  const c = Color(color);
  return c.blacken(amount);
};
export const lightness = (color: string, amount: number) => {
  const c = Color(color);
  return c.lightness(amount);
};

export const rotate = (color: string, degrees: number) => {
  const c = Color(color);
  return c.rotate(degrees);
};

export const mix = (color1: string, color2: string, weight?: number) => {
  const c1 = Color(color1);
  const c2 = Color(color2);
  return c1.mix(c2, weight);
};
