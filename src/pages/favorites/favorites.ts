import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  ToastController
} from "ionic-angular";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";
import { PostDetailsPage } from "../post-details/post-details";

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
    public postProvider: PostProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
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

  // Methode to get the favorite posts
  public favoritePosts() {
    if (this.listOfPosts) {
      this.listOfPosts.map(post => {
        this.postsLiked.map(id => {
          if (post.$id === id) {
            post.$isFavorite = true;
            this.listOfFavorites.push(post);
          }
        });
      });
    }
  }

  // Methode to open the post in modal
  public openPost(post) {
    let postsModal = this.modalCtrl.create(PostDetailsPage, {
      postData: post
    });
    postsModal.present();
  }

  // Methode to delete post from favorite
  public deleteFavorite(id) {
    // Delete the post from the view.
    this.listOfFavorites = this.listOfFavorites.filter(fav => fav.id != id);

    // Delete post's id from localStorage.
    this.postsLiked = this.postsLiked.filter(favId => favId != id);
    localStorage.setItem("PostsLiked", this.postsLiked.toString());
    // Display a message each time the user hit the button
    const toast = this.toastCtrl.create({
      message: "Post deleted from favorites",
      duration: 1500
    });
    toast.present();
  }
}
