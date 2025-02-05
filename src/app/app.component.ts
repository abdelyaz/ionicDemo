import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LoginPage } from "../pages/login/login";
import { HomePage } from "../pages/home/home";
import { ContactPage } from "../pages/contact/contact";
import { PostsListPage } from "../pages/posts-list/posts-list";
import { FavoritesPage } from "../pages/favorites/favorites";
import { TranslateService } from "@ngx-translate/core";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  requestInProgress = false;
  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "fr", "es"]);

    const browserLang = translate.getBrowserLang();

    translate.setDefaultLang(browserLang);

    console.log(browserLang);

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "List of posts", component: PostsListPage },
      { title: "Favorites Posts", component: FavoritesPage },
      { title: "Contact", component: ContactPage }
    ];
  }

  initializeApp() {
    this.requestInProgress = false;

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public logout() {
    this.nav.setRoot(LoginPage);
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
  }

  public switchLanguage(language: string) {
    console.log(language);
    this.translate.use(language);
  }
}
