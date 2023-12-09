import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-article',
  templateUrl: './item-article.component.html',
  styleUrls: ['./item-article.component.css']
})
export class ItemArticleComponent {
  @Input() articles: string[] = [];
  @Output() removeArticle = new EventEmitter<number>();

  onRemoveArticle(index: number) {
    this.removeArticle.emit(index);
  }
}

