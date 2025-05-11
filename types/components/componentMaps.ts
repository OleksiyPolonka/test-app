import { SupportedComponents } from "./enums";

export type ComponentPropsMap = {
  [SupportedComponents.Stub]: unknown;
  [SupportedComponents.Button]: unknown;
  [SupportedComponents.Footer]: unknown;
  [SupportedComponents.Header]: unknown;
  [SupportedComponents.Input]: unknown;
  [SupportedComponents.Link]: unknown;
  [SupportedComponents.Test]: unknown;
  [SupportedComponents.TestComponent]: unknown;
};
