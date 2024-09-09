import getBoatTypes from "@salesforce/apex/BoatDataService.getBoatTypes";
import { LightningElement, track, wire } from "lwc";

export default class BoatSearchForm extends LightningElement {
  selectBoatTypeId = "";

  error = undefined;
  @track searchOptions;
  @wire(getBoatTypes)
  boatTypes({ errors, data }) {
    if (data) {
      this.searchOptions = data.map((type) => {
        return {
          label: type.Name,
          value: type.Id
        };
      });
      this.searchOptions.unshift({
        label: "All boats",
        value: ""
      });
    } else if (errors) {
      this.searchOptions = undefined;
      this.error = errors;
    }
  }

  handleSearchOptionChange(e) {
    this.dispatchEvent(
      new CustomEvent("searchoptionchange", {
        detail: e.detail.value
      })
    );
  }
}
