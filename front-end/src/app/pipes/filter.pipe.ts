import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const post of value){
      if(post.name.indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(post.surname.indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(post.surname2.indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if((post.surname + " " + post.surname2 + ", " + post.name).indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(String(post.id).indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(String(post.datebirthday).indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(post.sexLarge.indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(post.phonePrefix.indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(post.country.indexOf(arg) > -1){
        resultPosts.push(post);
      }
      else if(String(post.lastModification).indexOf(arg) > -1){
        resultPosts.push(post);
      }
    };
    return resultPosts;
  }

}