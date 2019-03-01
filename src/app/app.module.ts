/** Modules */
import { CommonModule } from "@angular/common";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { IonicModule, IonicApp, IonicErrorHandler } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslatePoHttpLoader } from "@biesbjerg/ngx-translate-po-http-loader";

/** Pages */
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { LoginPage } from "../pages/login/login";
import { ListPage } from "../pages/list/list";
import { TutoPage } from "../pages/tuto/tuto";
import { PostsListPage } from "../pages/posts-list/posts-list";
import { CommentPage } from "../pages/comment/comment";
import { FavoritesPage } from "../pages/favorites/favorites";
import { PostDetailsPage } from "../pages/post-details/post-details";
import { FiltersPage } from "../pages/filters/filters";
import { CareerPage } from "../pages/career/career";

/** Providers */
import { NetworkProvider } from "../providers/network/network";
import { MapperProvider } from "../providers/mapper/mapper";
import { AuthenticationProvider } from "../providers/authentication/authentication";
import { PostProvider } from "../providers/post/post";
import { CategoryProvider } from "../providers/category/category";

/** Components */
import { LoadingComponent } from "../components/loading/loading";
import { FiltersComponent } from "../components/filters/filters";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslatePoHttpLoader(http, "./assets/i18n/", ".po");
// }

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    LoginPage,
    TutoPage,
    PostsListPage,
    CommentPage,
    FavoritesPage,
    PostDetailsPage,
    FiltersPage,
    CareerPage,
    LoadingComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    LoginPage,
    TutoPage,
    PostsListPage,
    CommentPage,
    FavoritesPage,
    PostDetailsPage,
    FiltersPage,
    CareerPage,
    LoadingComponent,
    FiltersComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NetworkProvider,
    PostProvider,
    AuthenticationProvider,
    MapperProvider,
    CategoryProvider
  ]
})
export class AppModule {}
