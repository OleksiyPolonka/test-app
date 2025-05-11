export const matchPath = (
  pathSegments: string[],
  configPath: string
): { matched: boolean; params: Record<string, string> } => {
  const configSegments = configPath.split("/").filter(Boolean);
  if (configSegments.length !== pathSegments.length)
    return { matched: false, params: {} };

  const params: Record<string, string> = {};

  for (let i = 0; i < configSegments.length; i++) {
    const seg = configSegments[i];
    const actual = pathSegments[i];
    if (seg.startsWith(":")) {
      params[seg.slice(1)] = actual;
    } else if (seg !== actual) {
      return { matched: false, params: {} };
    }
  }
  return { matched: true, params };
};
