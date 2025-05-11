import { ComponentPropsMap } from "./componentMaps";
import { SupportedComponents } from "./enums";

export type LayoutItem = {
  /**
   * Area property is used for positioning Component in layout using css grid
   */
  area: string;

  type: SupportedComponents;
  props?: ComponentPropsMap[SupportedComponents];
};
