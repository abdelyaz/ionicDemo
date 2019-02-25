import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Refresher,
  ModalController
} from "ionic-angular";
import { CategoryProvider } from "../../providers/category/category";
import { Category } from "../../models/category";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";
import { CommentPage } from "../comment/comment";

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
  public cleanInputSearchbar: string = "";
  public favoritesIds = [];
  public idsArray = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public categoryProvider: CategoryProvider,
    public postProvider: PostProvider,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
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
        this.initializePosts();
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

  // Methode to Initilize liste of posts.
  public initializePosts() {
    this.allPosts = this.listOfPosts;
  }

  // Methode search by post's title OR description.
  public search(e) {
    this.initializePosts();

    const keyword = e.target.value;

    if (keyword && keyword.trim() != "") {
      this.allPosts = this.allPosts.filter(item => {
        return (
          item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1 ||
          item.description.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        );
      });
    }
  }

  // Methode to refresh and reload post by pulling donw the screen.
  public pullToRefresh(refresher: Refresher) {
    // Clean searchbar
    this.cleanInputSearchbar = "";

    // Refresh Posts
    this.postProvider
      .getPosts()
      .then(posts => {
        this.allPosts = posts;
        refresher.complete();
        this.requestInProgress = false;
        console.log("Refreshed successfully !!");
      })
      .catch(error => {
        console.log("Error on refreshing !!");
        console.error(error);
        refresher.complete();
      });
  }

  // Methode to add Post to favorites.
  public favoritesBtn(post) {
    // Customize message
    let msg: string;

    if (!post.isFavorite) {
      // Change isFavorite value
      post.isFavorite = true;
      this.postProvider
        .editPost(post, post.id)
        .then(data => {
          this.favoritesIds.push(data.$id);
          localStorage.setItem("PostsLiked", this.favoritesIds.toString());
          msg = "You liked the post";
          toast.present();
        })
        .catch(error => console.log(error));
    } else {
      // Change isFavorite value
      post.isFavorite = false;
      this.postProvider
        .editPost(post, post.id)
        .then(data => {
          this.idsArray = JSON.parse(
            "[" + localStorage.getItem("PostsLiked") + "]"
          );

          this.favoritesIds = this.idsArray.filter(id => id != data.$id);
          localStorage.setItem("PostsLiked", this.favoritesIds.toString());
          msg = "You disliked the post";
          toast.present();
        })
        .catch(error => console.log(error));
    }

    // Display a message each time the user hit the button
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
  }

  // Methode to clean Searchbar input
  public cleanSearch() {
    console.log("clean this shit !");
    this.cleanInputSearchbar = "";
    this.initializePosts();
  }

  // Methode to open Comments in modal.
  public openComments(post: Post) {
    let commentsModal = this.modalCtrl.create(CommentPage, {
      postData: post
    });
    commentsModal.present();
  }
}
