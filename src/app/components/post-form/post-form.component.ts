import { Component, EventEmitter, Output } from '@angular/core';
import { IPost } from '../../../types/posts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  title = '';
  body='';

  @Output() onAdd = new EventEmitter()

  createPost(event: Event){
    event.preventDefault()

    this.onAdd.emit({
      title: this.title,
      body: this.body
    })

    this.title = ''
    this.body = ''
  }
}
