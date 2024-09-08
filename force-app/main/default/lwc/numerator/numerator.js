import { LightningElement } from "lwc";

export default class Numerator extends LightningElement {
  counter = 0;

  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }

  handleMultiply(e) {
    const factor = e.detail;
    this.counter *= factor;
  }
}