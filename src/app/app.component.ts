import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
    {id:1, title: 'JavaScript', body: 'post description'},
    {id:2, title: 'C#', body: 'post description'},
    {id:3, title: 'TypeScript', body: 'post description'}
  ]

  onAdd(post: IPost){
    this.posts.push({id: this.posts.length + 1, title: post.title, body: post.body}) 
  }
}
