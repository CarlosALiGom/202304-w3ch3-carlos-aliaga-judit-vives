import type { ComponentStructure } from "../../types/types";
import Component from "../Component/Component.js";

class DeleteButtonComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element, className: string) {
    super(parentElement, "button", className);
    this.className = className;

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `<i class="icon icon--delete fas fa-times-circle"></i>`;
  }
}

export default DeleteButtonComponent;
