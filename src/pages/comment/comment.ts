import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

import * as moment from "moment";
import { Comment } from "../../models/comment";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-comment",
  templateUrl: "comment.html"
})
export class CommentPage {
  public postData = this.navParams.get("postData");
  public arrayOfComments: Array<any> = this.postData["comments"];
  public comment: string = "";

  public payload = new Comment();
  // public payload = {
  //   id: null,
  //   author: null,
  //   avatar: null,
  //   comment: null,
  //   date_time: null
  // };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public postProvider: PostProvider
  ) {}

  ionViewDidLoad() {}

  // Methode to close Comment's modal
  public closeComments() {
    this.viewCtrl.dismiss();
  }

  // Methode to generate the ID for the new commment
  public generateId() {
    const IDs = [];
    this.arrayOfComments.map(comment => {
      IDs.push(comment.id);
    });
    const newId = Math.max(...IDs) + 1;
    return newId;
  }

  // Methode to add a comment.
  public addComment() {
    // Feed the payload
    this.payload.id = this.generateId();
    this.payload.author = "Abdelkader";
    this.payload.avatar = "/assets/imgs/avatars/user2.png";
    this.payload.comment = this.comment;
    this.payload.date_time = moment().format("D MMMM YYYY, HH:mm");

    this.arrayOfComments.push(this.payload);
    console.log("postData ::", this.postData.id);

    // this.postProvider
    //   .editPost(this.postData, this.postData.id)
    //   .then(post => {
    //     // Clean input when comment added
    //     this.comment = "";

    //     console.log("Comment added to post and updated successfully", post);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
}
