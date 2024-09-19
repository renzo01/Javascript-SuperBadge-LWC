import { api, LightningElement } from "lwc";

export default class BoatTile extends LightningElement {
  @api boat;
  @api
  selectedBoatId;

  get backgroundStyle() {
    return `background: url("${this.boat.Picture__c}") no-repeat center center; background-size: cover;`;
  }

  get tileClass() {
    return this.boat.id === this.selectedBoatId ? "selected" : "";
  }

  selectBoat() {
    this.dispatchEvent(new CustomEvent("selectboat", { detail: this.boat.id }));
  }
}
