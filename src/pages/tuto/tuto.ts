import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";

/**
 * Generated class for the TutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tuto",
  templateUrl: "tuto.html"
})
export class TutoPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}
  public skipTuto() {
    this.navCtrl.pop();
  }
}
