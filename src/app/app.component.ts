import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListsComponent } from './components/post-lists/post-lists.component';
import { IPost } from '../types/posts';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PostFormComponent, PostListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts: IPost[] = [
    {id: uuidv4(), title: 'JavaScript', body: 'post description'},
    {id: uuidv4(), title: 'C#', body: 'post description'},
    {id: uuidv4(), title: 'TypeScript', body: 'post description'}
  ]

  onAdd(post: IPost){
    this.posts.push({id: uuidv4(), title: post.title, body: post.body}) 
  }
}
