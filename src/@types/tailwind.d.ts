export interface TailwindConfig {
  theme: Theme;
  variants: { [K in keyof Theme]?: string[] };
  purge?: any[];
  plugins: any[];
  target?: string;
  prefix?: string;
  important?: boolean;
  separator?: string;
  corePlugins?: string[];
  darkMode: boolean;
  presets: any[];
  variantOrder: string[];
}
export interface Theme {
  extend?: Theme;
  screens?: KeyConfig;
  colors?: KeyConfig;
  spacing?: KeyConfig;
  backgroundColor?: KeyConfig;
  backgroundOpacity?: KeyConfig;
  backgroundPosition?: KeyConfig;
  backgroundSize?: KeyConfig;
  borderColor?: KeyConfig;
  borderOpacity?: KeyConfig;
  borderRadius?: KeyConfig;
  borderWidth?: KeyConfig;
  boxShadow?: KeyConfig;
  container?: KeyConfig;
  cursor?: KeyConfig;
  divideColor?: KeyConfig;
  divideOpacity?: KeyConfig;
  divideWidth?: KeyConfig;
  fill?: KeyConfig;
  flex?: KeyConfig;
  flexGrow?: KeyConfig;
  flexShrink?: KeyConfig;
  fontFamily?: KeyConfig;
  fontSize?: KeyConfig;
  fontWeight?: KeyConfig;
  height?: KeyConfig;
  inset?: KeyConfig;
  letterSpacing?: KeyConfig;
  lineHeight?: KeyConfig;
  listStyleType?: KeyConfig;
  margin?: KeyConfig;
  maxHeight?: KeyConfig;
  maxWidth?: KeyConfig;
  minHeight?: KeyConfig;
  minWidth?: KeyConfig;
  objectPosition?: KeyConfig;
  opacity?: KeyConfig;
  order?: KeyConfig;
  padding?: KeyConfig;
  placeholderColor?: KeyConfig;
  placeholderOpacity?: KeyConfig;
  space?: KeyConfig;
  stroke?: KeyConfig;
  strokeWidth?: KeyConfig;
  textColor?: KeyConfig;
  textOpacity?: KeyConfig;
  width?: KeyConfig;
  zIndex?: KeyConfig;
  gap?: KeyConfig;
  gridTemplateColumns?: KeyConfig;
  gridColumn?: KeyConfig;
  gridColumnStart?: KeyConfig;
  gridColumnEnd?: KeyConfig;
  gridTemplateRows?: KeyConfig;
  gridRow?: KeyConfig;
  gridRowStart?: KeyConfig;
  gridRowEnd?: KeyConfig;
  transformOrigin?: KeyConfig;
  scale?: KeyConfig;
  rotate?: KeyConfig;
  translate?: KeyConfig;
  skew?: KeyConfig;
  transitionProperty?: KeyConfig;
  transitionTimingFunction?: KeyConfig;
  transitionDuration?: KeyConfig;
  transitionDelay?: KeyConfig;
}
export interface KeyConfig {
  [key: string]: string | { [key: string]: any };
}
