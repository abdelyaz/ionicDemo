import { Injectable } from "@angular/core";
import { MapperProvider } from "../mapper/mapper";
import { NetworkProvider } from "../network/network";
import { Post } from "../../models/post";

/*
  Generated class for the ProfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  constructor(
    private networkProvider: NetworkProvider,
    private mapperProvider: MapperProvider
  ) {}

  // Methode to get Posts.
  public getPosts(): Promise<Array<Post>> {
    return this.networkProvider
      .get("posts")
      .then(posts => {
        const ArrayOfPosts = this.mapperProvider._mapJsonToProfils(posts);
        return Promise.resolve(ArrayOfPosts);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  // Methode to edit Post.
  public editPost(payload, id: number): Promise<Post> {
    return this.networkProvider.put(`posts/${id}`, payload).then(post => {
      if (post) {
        const postUpdated = this.mapperProvider._mapJsonToPost(post);
        return Promise.resolve(postUpdated);
      } else {
        return Promise.reject("Error");
      }
    });
  }
}
