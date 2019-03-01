import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ViewController,
  Events
} from "ionic-angular";
import { Category } from "../../models/category";

/**
 * Generated class for the FiltersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-filters",
  templateUrl: "filters.html"
})
export class FiltersPage {
  public categories: Array<Category> = null;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public events: Events
  ) {}

  ionViewDidLoad() {
    if (this.viewCtrl) {
      this.categories = this.viewCtrl.data.categories;

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
        // Check/unCheck category
        if (category["isChecked"] === true) {
          category["isChecked"] = true;
        } else {
          category["isChecked"] = false;
        }
      }

      if (category["isChecked"] === true) {
        categories.push(category);
      }
    });

    // Publish event to publish selected filters
    this.events.publish("filters:changed", categories);
  }
}
