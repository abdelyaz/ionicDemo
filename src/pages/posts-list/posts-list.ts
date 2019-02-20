import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { CategoryProvider } from "../../providers/category/category";
import { Category } from "../../models/category";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the PostsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-posts-list",
  templateUrl: "posts-list.html"
})
export class PostsListPage {
  public category: string = "lifestyle";
  public requestInProgress = false;
  public listOfCategories: Array<Category> = null;
  public listOfPosts: Array<Post> = null;
  public allPosts = [];
  public isLiked = false;
  public icon: string = "heart-outline";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryProvider: CategoryProvider,
    public postProvider: PostProvider,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.getListOfCategories();
    this.getListOfPosts();
  }

  // Methode to get list of categories.
  public getListOfCategories() {
    this.requestInProgress = true;

    this.categoryProvider
      .getCategories()
      .then(data => {
        this.listOfCategories = data;
        this.requestInProgress = false;
      })
      .catch(error => {
        console.log(error);
        this.requestInProgress = false;
      });
  }

  // Methode the get all Posts.
  public getListOfPosts() {
    this.requestInProgress = true;
    this.postProvider
      .getPosts()
      .then(posts => {
        this.listOfPosts = posts;
        if (this.listOfPosts) {
          this.listOfPosts.map(data => {
            this.allPosts.push(data);
          });
        }
        // this.getPostWithCategory("Technology");

        this.requestInProgress = false;
      })
      .catch(error => {
        console.log("Error ::", error);
        this.requestInProgress = false;
      });
  }

  // Methode get posts by category.
  public getPostWithCategory(category: string): Array<Post> {
    const array = [];

    if (this.allPosts) {
      for (const post of this.allPosts) {
        if (post.category === category) {
          array.push(post);
        }
      }
    }
    return array;
  }

  // Methode to add Post to favorites.
  // TODO: add a post to favorites and save it in local storage
  public addToFavorites(e, post) {
    console.log();

    // Reverse booleane value
    this.isLiked = !this.isLiked;

    // Customize message
    let msg: string;
    if (this.isLiked) {
      msg = "You liked the post";
    } else {
      msg = "You disliked the post";
    }

    // Display a message each time the user hit the button
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();

    return this.isLiked;
  }

  public search(e) {
    console.log(e);
    console.log("=========");
  }
}
