export class Comment {
  public _id: number = null;
  public _author: string = null;
  public _avatar: string = null;
  public _comment: string = null;
  public _date_time: string = null;

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
   * Getter comment
   * @return {string }
   */
  public get comment(): string {
    return this._comment;
  }

  /**
   * Getter date_time
   * @return {string }
   */
  public get date_time(): string {
    return this._date_time;
  }

  /**
   * Getter avatar
   * @return {string }
   */
  public get avatar(): string {
    return this._avatar;
  }

  /**
   * Setter avatar
   * @param {string } value
   */
  public set avatar(value: string) {
    this._avatar = value;
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
   * Setter comment
   * @param {string } value
   */
  public set comment(value: string) {
    this._comment = value;
  }

  /**
   * Setter date_time
   * @param {string } value
   */
  public set date_time(value: string) {
    this._date_time = value;
  }
}
