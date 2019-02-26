import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the PostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-post-details",
  templateUrl: "post-details.html"
})
export class PostDetailsPage {
  public post = this.navParams.get("postData");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {}

  // Methode to close Post detail's modal
  public closeDetails() {
    this.viewCtrl.dismiss();
  }
}
