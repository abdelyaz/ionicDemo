import * as moment from "moment";
import { Category } from "./category";
import { Comment } from "./comment";

export class Post {
  public id: number = null;
  public author: string = null;
  public category: Category = null;
  public isFavorite: boolean = null;
  public avatar: string = null;
  public date: moment.Moment = null;
  public title: string = null;
  public img: string = null;
  public description: string = null;
  public comments: Array<Comment> = null;

  /**
   * Getter $id
   * @return {number }
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $author
   * @return {string }
   */
  public get $author(): string {
    return this.author;
  }

  /**
   * Getter $category
   * @return {Category }
   */
  public get $category(): Category {
    return this.category;
  }

  /**
   * Getter $isFavorite
   * @return {boolean }
   */
  public get $isFavorite(): boolean {
    return this.isFavorite;
  }

  /**
   * Getter $avatar
   * @return {string }
   */
  public get $avatar(): string {
    return this.avatar;
  }

  /**
   * Getter $date
   * @return {moment.Moment }
   */
  public get $date(): moment.Moment {
    return this.date;
  }

  /**
   * Getter $title
   * @return {string }
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Getter $img
   * @return {string }
   */
  public get $img(): string {
    return this.img;
  }

  /**
   * Getter $description
   * @return {string }
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $comments
   * @return {Array<Comment> }
   */
  public get $comments(): Array<Comment> {
    return this.comments;
  }

  /**
   * Setter $id
   * @param {number } value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $author
   * @param {string } value
   */
  public set $author(value: string) {
    this.author = value;
  }

  /**
   * Setter $category
   * @param {Category } value
   */
  public set $category(value: Category) {
    this.category = value;
  }

  /**
   * Setter $isFavorite
   * @param {boolean } value
   */
  public set $isFavorite(value: boolean) {
    this.isFavorite = value;
  }

  /**
   * Setter $avatar
   * @param {string } value
   */
  public set $avatar(value: string) {
    this.avatar = value;
  }

  /**
   * Setter $date
   * @param {moment.Moment } value
   */
  public set $date(value: moment.Moment) {
    this.date = value;
  }

  /**
   * Setter $title
   * @param {string } value
   */
  public set $title(value: string) {
    this.title = value;
  }

  /**
   * Setter $img
   * @param {string } value
   */
  public set $img(value: string) {
    this.img = value;
  }

  /**
   * Setter $description
   * @param {string } value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $comments
   * @param {Array<Comment> } value
   */
  public set $comments(value: Array<Comment>) {
    this.comments = value;
  }
}
