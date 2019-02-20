import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public listOfPosts: Array<Post> = null;
  public requestInProgress = false;

  constructor(
    public navCtrl: NavController,
    public postProvider: PostProvider
  ) {}
  ionViewDidLoad() {
    this.getListOfPosts();
  }
  public getListOfPosts() {
    this.requestInProgress = true;
    this.postProvider
      .getPosts()
      .then(posts => {
        this.listOfPosts = posts;
        console.log("this.listOfPosts", this.listOfPosts);
        this.requestInProgress = false;
      })
      .catch(error => {
        console.log("Error ::", error);
        this.requestInProgress = false;
      });
  }
}
