export type CssVariablesProps = Record<string, string>;
export type ParsedCssVariables = Record<string, string>;

export const parseCssVariables = (
  cssVars: CssVariablesProps
): React.CSSProperties => {
  return Object.entries(cssVars).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [`--color-${key}`]: value,
    };
  }, {} as Record<string, string | number>);
};
