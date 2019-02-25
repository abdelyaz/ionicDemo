import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  public requestInProgress = false;
  public listOfPosts: Array<Post> = null;
  public listOfFavorites = [];
  public postsLiked = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public postProvider: PostProvider
  ) {}

  ionViewDidLoad() {
    // Get list of posts
    this.getListOfPosts();

    // Get IDs of liked posts from LocalStorage
    this.postsLiked = JSON.parse(
      "[" + localStorage.getItem("PostsLiked") + "]"
    );
  }

  // Methode the get all Posts.
  public getListOfPosts() {
    this.requestInProgress = true;
    this.postProvider
      .getPosts()
      .then(posts => {
        this.listOfPosts = posts;
        this.favoritePosts();
        this.requestInProgress = false;
      })
      .catch(error => {
        console.log("Error ::", error);
        this.requestInProgress = false;
      });
  }

  public favoritePosts() {
    if (this.listOfPosts) {
      this.listOfPosts.map(post => {
        this.postsLiked.map(id => {
          if (post.$id === id) {
            console.log(post);
            this.listOfFavorites.push(post);
          }
        });
      });
    }
  }
}
