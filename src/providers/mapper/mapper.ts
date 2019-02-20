import { Injectable } from "@angular/core";
import { Post } from "../../models/post";
import { Category } from "../../models/category";

/*
  Generated class for the MapperProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapperProvider {
  constructor() {}

  /**
   * Mappers Post
   * @param postJson
   * @param arrayOfPosts
   */

  public _mapJsonToProfils(arrayOfPosts): Array<Post> {
    return arrayOfPosts.map(data => this._mapJsonToPost(data));
  }

  public _mapJsonToPost(postJson): Post {
    if (postJson) {
      const post = new Post();

      post.id = postJson["id"] ? postJson["id"] : null;
      post.author = postJson["author"] ? postJson["author"] : null;
      post.category = postJson["category"] ? postJson["category"] : null;
      post.isFavorite = postJson["isFavorite"] ? postJson["isFavorite"] : true;
      post.description = postJson["description"]
        ? postJson["description"]
        : null;
      post.img = postJson["img"] ? postJson["img"] : null;
      post.title = postJson["title"] ? postJson["title"] : null;
      post.avatar = postJson["avatar"] ? postJson["avatar"] : null;
      post.date = postJson["date"] ? postJson["date"] : null;

      return post;
    } else {
      return null;
    }
  }

  /**
   * Mappers Category
   * @param categoryJson
   * @param arrayOfCategories
   */

  public _mapJsonToCategories(arrayOfCategories): Array<Category> {
    return arrayOfCategories.map(data => this._mapJsonToCategory(data));
  }

  public _mapJsonToCategory(categoryJson): Category {
    if (categoryJson) {
      const category = new Category();

      category.id = categoryJson["id"] ? categoryJson["id"] : null;
      category.title = categoryJson["title"] ? categoryJson["title"] : null;

      return category;
    } else {
      return null;
    }
  }
}