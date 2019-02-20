import { Injectable } from "@angular/core";
import { NetworkProvider } from "../network/network";
import { MapperProvider } from "../mapper/mapper";
import { Category } from "../../models/category";

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {
  constructor(
    private networkProvider: NetworkProvider,
    private mapperProvider: MapperProvider
  ) {}

  public getCategories(): Promise<Array<Category>> {
    return this.networkProvider
      .get("categories")
      .then(categories => {
        const arrayOfCategories = this.mapperProvider._mapJsonToCategories(
          categories
        );
        return Promise.resolve(arrayOfCategories);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}
