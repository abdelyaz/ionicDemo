import { CommonModule } from "@angular/common";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { IonicModule, IonicApp, IonicErrorHandler } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { LoginPage } from "../pages/login/login";
import { ListPage } from "../pages/list/list";
import { TutoPage } from "../pages/tuto/tuto";
import { PostsListPage } from "../pages/posts-list/posts-list";

import { NetworkProvider } from "../providers/network/network";
import { MapperProvider } from "../providers/mapper/mapper";
import { AuthenticationProvider } from "../providers/authentication/authentication";
import { PostProvider } from "../providers/post/post";

import { ComponentsModule } from "../components/components.module";
import { CategoryProvider } from '../providers/category/category';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    LoginPage,
    TutoPage,
    PostsListPage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
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
    PostsListPage
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
