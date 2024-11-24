import { Component, Input } from '@angular/core';
import { MyButtonComponent } from '../UI/my-button/my-button.component';
import { IPost } from '../../../types/posts';


@Component({
  selector: 'app-post-lists',
  standalone: true,
  imports: [MyButtonComponent],
  templateUrl: './post-lists.component.html',
  styleUrl: './post-lists.component.css'
})
export class PostListsComponent {
  @Input() posts:any

  deletePost(posts: IPost[], id: string){
    const index = posts.findIndex(el => el.id === id)
    posts.splice(index, 1)
  }
}
