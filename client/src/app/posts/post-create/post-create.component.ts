import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  invalid: boolean = false;
  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() {}

  ngOnInit() {
    console.log();
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      this.invalid = true;
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
    this.invalid = false;
  }
}
