export class Category {
  public id: number = null;
  public title: string = null;

  /**
   * Getter $id
   * @return {number }
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Getter $title
   * @return {string }
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Setter $id
   * @param {number } value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Setter $title
   * @param {string } value
   */
  public set $title(value: string) {
    this.title = value;
  }
}
