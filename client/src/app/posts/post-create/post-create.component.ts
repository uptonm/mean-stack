import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  invalid: boolean = false;
  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();
  constructor(private postService: PostService) {}

  ngOnInit() {
    console.log();
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      this.invalid = true;
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
    this.invalid = false;
  }
}
