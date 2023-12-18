import { Injectable } from '@angular/core';
import axios from 'axios';
import { Posts } from '../models/PostModels';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public async getPosts():Promise<Array<Posts>{
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    let res = await axios.get("http://localhost:8090/api/collections/users/records");
    let posts = new Array<Posts>();
    res.data.items.forEach(item => {
      posts.push(new Posts().setId(item.id).setPostId(item.post_id).setPostText(item.post_text).setUsername(item.username));
    });
    return posts;
  }

  constructor() { 
  }
}
