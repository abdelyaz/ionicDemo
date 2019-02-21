import * as moment from "moment";
import { Category } from "./category";
import { Comment } from "./coment";

export class Post {
  public _id: number = null;
  public _author: string = null;
  public _category: Category = null;
  public _isFavorite: boolean = null;
  public _avatar: string = null;
  public _date: moment.Moment = null;
  public _title: string = null;
  public _img: string = null;
  public _description: string = null;
  public _comments: Array<Comment> = null;

  /**
   * Getter id
   * @return {number }
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter author
   * @return {string }
   */
  public get author(): string {
    return this._author;
  }

  /**
   * Getter category
   * @return {Category }
   */
  public get category(): Category {
    return this._category;
  }

  /**
   * Getter isFavorite
   * @return {boolean }
   */
  public get isFavorite(): boolean {
    return this._isFavorite;
  }

  /**
   * Getter description
   * @return {string }
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter img
   * @return {string }
   */
  public get img(): string {
    return this._img;
  }

  /**
   * Getter title
   * @return {string }
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter avatar
   * @return {string }
   */
  public get avatar(): string {
    return this._avatar;
  }

  /**
   * Getter date
   * @return {moment.Moment }
   */
  public get date(): moment.Moment {
    return this._date;
  }

  /**
   * Getter comments
   * @return {Array<Comment> }
   */
  public get comments(): Array<Comment> {
    return this._comments;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter author
   * @param {string } value
   */
  public set author(value: string) {
    this._author = value;
  }

  /**
   * Setter category
   * @param {Category } value
   */
  public set category(value: Category) {
    this._category = value;
  }

  /**
   * Setter isFavorite
   * @param {boolean } value
   */
  public set isFavorite(value: boolean) {
    this._isFavorite = value;
  }

  /**
   * Setter description
   * @param {string } value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter img
   * @param {string } value
   */
  public set img(value: string) {
    this._img = value;
  }

  /**
   * Setter title
   * @param {string } value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter avatar
   * @param {string } value
   */
  public set avatar(value: string) {
    this._avatar = value;
  }

  /**
   * Setter date
   * @param {moment.Moment } value
   */
  public set date(value: moment.Moment) {
    this._date = value;
  }

  /**
   * Setter comments
   * @param {Array<Comment> } value
   */
  public set comments(value: Array<Comment>) {
    this._comments = value;
  }
}
