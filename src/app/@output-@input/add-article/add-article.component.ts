import { Component, Output, EventEmitter } from '@angular/core';

interface Article {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  @Output() addArticle = new EventEmitter<string>();
  newArticle: string = '';

  onAddArticle() {
    this.addArticle.emit(this.newArticle);
    this.newArticle = '';
  }
}

