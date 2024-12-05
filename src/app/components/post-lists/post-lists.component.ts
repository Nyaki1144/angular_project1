import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() filteredPosts: IPost[] = [] 
  @Output() postsChanged = new EventEmitter<IPost[]>();


  deletePost(posts: IPost[], id: string){
    const index = posts.findIndex(el => el.id === id)
    if (index !== -1) {
      posts.splice(index, 1);
      this.postsChanged.emit(posts);
    }
  }
}
