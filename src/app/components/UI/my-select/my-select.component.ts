import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from '../my-button/my-button.component';
import { IPost } from '../../../../types/posts';

@Component({
  selector: 'app-my-select',
  standalone: true,
  imports: [FormsModule, MyButtonComponent],
  templateUrl: './my-select.component.html',
  styleUrl: './my-select.component.css'
})

export class MySelectComponent {
  selectedData!: string;
  @Input() filteredPosts: IPost[] = [];

  setData(selectedData: string){
    if(selectedData === 'name'){
      this.filteredPosts.sort((a,b) =>  a.title.localeCompare(b.title))
    }else if(selectedData === 'description'){
      this.filteredPosts.sort((a,b) =>  a.body.localeCompare(b.body))
    }
  }
}
