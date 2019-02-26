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
import { PostDetailsPage } from "../post-details/post-details";

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
  public category: string = "technology";
  public requestInProgress = false;
  public listOfCategories: Array<Category> = null;
  public listOfPosts: Array<Post> = null;
  public allPosts = [];
  public cleanInputSearchbar: string = "";
  public favoritesIds = [];
  public favoritesPosts = [];
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
        // Filter favorite Posts.
        this.isFavorite();
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
        this.listOfPosts = this.allPosts;
        this.isFavorite();

        refresher.complete();
        this.requestInProgress = false;
      })
      .catch(error => {
        console.error(error);
        refresher.complete();
      });
  }

  // Methode to add Post to favorites.
  public favoritesBtn(post) {
    if (!post.isFavorite) {
      // Change isFavorite value
      post.isFavorite = true;

      // Add favorites posts to localStorage
      this.favoritesIds.push(post.$id);
      this.store("PostsLiked", this.favoritesIds);

      // Show toast
      this.showToast("You liked the post");
    } else {
      // Change isFavorite value
      post.isFavorite = false;

      this.idsArray = JSON.parse(
        "[" + localStorage.getItem("PostsLiked") + "]"
      );

      // Remove post from localStorage
      this.favoritesIds = this.idsArray.filter(id => id != post.$id);
      this.store("PostsLiked", this.favoritesIds);

      // Show toast
      this.showToast("You disliked the post");
    }
  }

  // Methode filter Liked posts using localStorage.
  public isFavorite() {
    if (localStorage.getItem("PostsLiked")) {
      this.favoritesPosts = JSON.parse(
        "[" + localStorage.getItem("PostsLiked") + "]"
      );
      if (this.listOfPosts.length > 0) {
        this.listOfPosts.map(post => {
          this.favoritesPosts.map(id => {
            if (post.$id === id) {
              post.isFavorite = true;
            }
          });
        });
      }
    }
    this.favoritesIds = this.favoritesPosts;
  }

  // Methode to clean Searchbar input.
  public cleanSearch() {
    this.cleanInputSearchbar = "";
    this.initializePosts();
  }

  // Methode storing in localStorage.
  public store(key: string, value: any) {
    if (key && value) {
      localStorage.setItem(key, value.toString());
    }
  }

  // Methode display a Toast.
  public showToast(msg: string) {
    // Display a message each time the user hit the button
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

  // Methode to open Comments in modal.
  public openComments(post: Post) {
    let commentsModal = this.modalCtrl.create(CommentPage, {
      postData: post
    });
    commentsModal.present();
  }

  // Methode to open the post in modal
  public openPost(post) {
    let postsModal = this.modalCtrl.create(PostDetailsPage, {
      postData: post
    });
    postsModal.present();
  }
}
