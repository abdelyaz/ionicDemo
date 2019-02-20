export class Category {
  public _id: number = null;
  public _title: string = null;

  /**
   * Getter id
   * @return {number }
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter title
   * @return {string }
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter title
   * @param {string } value
   */
  public set title(value: string) {
    this._title = value;
  }
}
