import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";
import { PostDetailsPage } from "../post-details/post-details";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public listOfPosts: Array<Post> = null;
  public requestInProgress = false;

  constructor(
    public navCtrl: NavController,
    public postProvider: PostProvider,
    public modalCtrl: ModalController
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
        this.requestInProgress = false;
      })
      .catch(error => {
        console.log("Error ::", error);
        this.requestInProgress = false;
      });
  }

  // Methode to open the post in modal
  public openPost(post) {
    let postsModal = this.modalCtrl.create(PostDetailsPage, {
      postData: post
    });
    postsModal.present();
  }
}
