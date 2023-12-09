import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Shopping List';
 
  shoppingList: string[] = [];

  onAddArticle(article: string) {
    this.shoppingList.push(article);
  }

  onRemoveArticle(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
  

