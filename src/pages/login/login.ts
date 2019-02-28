import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthenticationProvider } from "../../providers/authentication/authentication";
import { TutoPage } from "../tuto/tuto";
import { HomePage } from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public tutoIsSeen = localStorage.getItem("tuto_seen") === "seen";

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public auth: AuthenticationProvider
  ) {}

  @ViewChild("username") username;
  @ViewChild("password") password;

  ionViewDidLoad() {}

  // Methode to login then set root page on HomePage and open Tutorial modal.
  public logIn() {
    this.auth
      .authenticate(this.username.value, this.password.value)
      .then(data => {
        if (data) {
          this.navCtrl.setRoot(HomePage);

          // Open Tutorial page if it's not already seen.
          if (!this.tutoIsSeen) {
            this.openTuto();
          }
        }
      })
      .catch(error => console.log("Authenticate error", error));
  }

  // Methode open Tutorial page on modal.
  public openTuto() {
    const modal = this.modalCtrl.create(TutoPage);
    modal.present();
  }
}
