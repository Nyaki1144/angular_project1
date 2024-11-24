import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from "../UI/my-button/my-button.component";
import { MyModalComponent } from '../UI/my-modal/my-modal.component';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, MyModalComponent, MyButtonComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  title = '';
  body='';
  isOpen = false;
  @Output() onAdd = new EventEmitter()

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

}
