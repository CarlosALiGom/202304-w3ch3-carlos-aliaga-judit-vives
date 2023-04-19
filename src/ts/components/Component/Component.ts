import { type ComponentStructure } from "../../types/types";

abstract class Component implements ComponentStructure {
  element: Element;
  className: string;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }

  abstract renderHtml(): void;
}

export default Component;
