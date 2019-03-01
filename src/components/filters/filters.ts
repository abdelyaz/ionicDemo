import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Category } from "../../models/category";
import { Events, ViewController } from "ionic-angular";

/**
 * Generated class for the FiltersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "filters",
  templateUrl: "filters.html"
})
export class FiltersComponent implements OnInit {
  @Input() categories: Array<Category> = [];

  text: string;

  constructor(public viewCtrl: ViewController, public events: Events) {
    // console.log("Hello FiltersComponent Component", this.categories);
    this.text = "Hello World";
  }

  ngOnInit() {
    if (this.viewCtrl) {
      // Adding new param to check if element is checked or nah!
      this.categories.map(category => {
        if (!category["isChecked"]) {
          category["isChecked"] = false;
        }
      });
    }
  }

  public changecategory(cat) {
    // Making a loop through selected items and publishing them on each change.
    let categories = [];

    this.categories.map(category => {
      if (category.id === cat.id) {
        // Check/unCheck category.
        if (category["isChecked"]) {
          category["isChecked"] = false;
        } else {
          category["isChecked"] = true;
        }
      }

      // Push filtred posts to display it.
      if (category["isChecked"] === true) {
        categories.push(category);
      }
    });

    // Publish event to publish selected filters.
    this.events.publish("filters:changed", categories);
  }
}
