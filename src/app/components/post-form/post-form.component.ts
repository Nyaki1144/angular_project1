import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from "../UI/my-button/my-button.component";
import { MyModalComponent } from '../UI/my-modal/my-modal.component';
import { MySelectComponent } from '../UI/my-select/my-select.component';
import { IPost } from '../../../types/posts';


@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, MyModalComponent, MyButtonComponent, MySelectComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  title = '';
  body='';
  isOpen = false;
  search = '';

  @Input() filteredPosts: IPost[] = [];
  @Input() posts: IPost[] = [];
  @Output() onAdd = new EventEmitter();
  @Output() onFilter = new EventEmitter();

  createPost(event: Event){
    event.preventDefault()

    this.onAdd.emit({
      title: this.title,
      body: this.body
    })

    this.title = ''
    this.body = ''
    this.isOpen = false
  }

  toggleModal(){
    this.isOpen = !this.isOpen
  }

  setSearch(){
    this.filteredPosts = this.posts.filter(el => {
      const regexp = new RegExp(this.search, 'gi');  
      return el.title.match(regexp)
    })  

    this.onFilter.emit(this.filteredPosts)
  }

}
