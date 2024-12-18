import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListsComponent } from './post-lists.component';

describe('PostListsComponent', () => {
  let component: PostListsComponent;
  let fixture: ComponentFixture<PostListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
