import { ComponentStructure } from "../../types/types";

abstract class Component implements ComponentStructure {
  element: Element;

  abstract renderHtml: () => void;
}

export default Component;
