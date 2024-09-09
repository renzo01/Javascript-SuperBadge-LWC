import getBoats from "@salesforce/apex/BoatDataService.getBoats";
import { LightningElement, track } from "lwc";

export default class BoatSearch extends LightningElement {
  isLoading = false;
  @track boats;
  handleLoading() {}

  handleDoneLoading() {}
  searchBoats(e) {
    this.isLoading = true;
    getBoats({
      boatTypeId: e.detail.value || ""
    }).then((boats) => {
      console.log(boats);
      this.isLoading = false;
    });
  }
  createNewBoat() {}
}
