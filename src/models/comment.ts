import * as moment from "moment";

export class Comment {
  public id: number = null;
  public author: string = null;
  public avatar: string = null;
  public comment: string = null;
  public date_time: moment.Moment = null;

  /**
   * Getter $date_time
   * @return {moment.Moment }
   */
  public get $date_time(): moment.Moment {
    return this.date_time;
  }

  /**
   * Setter $date_time
   * @param {moment.Moment } value
   */
  public set $date_time(value: moment.Moment) {
    this.date_time = value;
  }

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
   * Getter $avatar
   * @return {string }
   */
  public get $avatar(): string {
    return this.avatar;
  }

  /**
   * Getter $comment
   * @return {string }
   */
  public get $comment(): string {
    return this.comment;
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
   * Setter $avatar
   * @param {string } value
   */
  public set $avatar(value: string) {
    this.avatar = value;
  }

  /**
   * Setter $comment
   * @param {string } value
   */
  public set $comment(value: string) {
    this.comment = value;
  }
}
