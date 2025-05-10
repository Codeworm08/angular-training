import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  constructor(private route:ActivatedRoute, private http:HttpClient) {}
  posts: any[] = [];
  userId: string | null = null;
  isLoading = true;

  ngOnInit():void{
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.http
        .get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
        .subscribe((data) => {
          this.posts = data;
          this.isLoading = false;
        });
    }
  }
}
