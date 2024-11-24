import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-lists',
  standalone: true,
  imports: [],
  templateUrl: './post-lists.component.html',
  styleUrl: './post-lists.component.css'
})
export class PostListsComponent {
  @Input() posts:any
}
