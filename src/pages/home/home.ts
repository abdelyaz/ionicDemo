import { Component } from "@angular/core";
import {
  NavController,
  ModalController,
  PopoverController,
  Events
} from "ionic-angular";
import { Post } from "../../models/post";
import { PostProvider } from "../../providers/post/post";
import { PostDetailsPage } from "../post-details/post-details";
import { FiltersPage } from "../filters/filters";
import { CategoryProvider } from "../../providers/category/category";
import { Category } from "../../models/category";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public listOfPosts: Array<Post> = null;
  public fakeListOfPosts: Array<Post> = null;
  public listOfCategories: Array<Category> = null;
  public requestInProgress = false;

  constructor(
    public navCtrl: NavController,
    public postProvider: PostProvider,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public categoryProvider: CategoryProvider,
    public events: Events
  ) {}

  ionViewDidLoad() {
    this.getListOfPosts();
    this.getListOfCategories();
    this.events.subscribe("filters:changed", categories => {
      this.buildArray(categories);
    });
  }

  public getListOfPosts() {
    this.requestInProgress = true;
    this.postProvider
      .getPosts()
      .then(posts => {
        this.listOfPosts = posts;
        this.fakeListOfPosts = this.listOfPosts;
        this.buildArray();
        this.requestInProgress = false;
      })
      .catch(error => {
        console.log("Error ::", error);
        this.requestInProgress = false;
      });
  }

  public buildArray(filters?) {
    if (!filters) {
      this.fakeListOfPosts = this.listOfPosts;
    } else {
      this.fakeListOfPosts = this.listOfPosts;
      let posts: Array<Post> = [];
      if (filters.length > 0) {
        filters.map(filter => {
          this.fakeListOfPosts.map(post => {
            if (filter.title === post.category) {
              posts.push(post);
              return posts;
            }
          });
        });

        this.fakeListOfPosts = posts;
      } else {
        this.fakeListOfPosts = this.listOfPosts;
      }
    }
  }

  // Methode to get list of categories.
  public getListOfCategories() {
    this.requestInProgress = true;

    this.categoryProvider
      .getCategories()
      .then(data => {
        this.listOfCategories = data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Methode to open the post in modal
  public openPost(post) {
    let postsModal = this.modalCtrl.create(PostDetailsPage, {
      postData: post
    });
    postsModal.present();
  }

  // Methode to open Filters in popover
  public openFilter(e) {
    const popover = this.popoverCtrl.create(FiltersPage, {
      categories: this.listOfCategories
    });
    popover.present({
      ev: e
    });
  }
}
