import type { ComponentStructure } from "../../types/types";
import Component from "../Component/Component";

class DeleteButtonComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement, "button", "");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `<i class="icon icon--delete fas fa-times-circle"></i>`;
  }
}

export default DeleteButtonComponent;
