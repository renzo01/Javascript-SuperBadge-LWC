import { LightningElement } from "lwc";

export default class Controls extends LightningElement {
  handleAdd() {
    this.dispatchEvent(new CustomEvent("add"));
  }
  handleSubtract() {
    this.dispatchEvent(new CustomEvent("subtract"));
  }
  handleMultiply(e) {
    const factor = e.target.dataset.factor;
    this.dispatchEvent(new CustomEvent("multiply", { detail: factor }));
  }
}