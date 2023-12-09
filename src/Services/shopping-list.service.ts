import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService {
  setShoppingList: any;

  constructor() { }
 
  public shoppingList: string[] = [];

  addItem(item: string) {
    this.shoppingList.push(item);
  }

  getShoppingList() {
    return this.shoppingList;
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }

  //méthode ajouter date et quantité au "message" --pour mamy--//
  getShoppingListWithDateTime(): string[] {
    return this.shoppingList.map(item => {
      const quantity = this.extractItemQuantity(item);
      return `${item} - ajouté le : ${this.formatDate(new Date())} - pour mamy - Quantité : ${quantity}`;
    });
  }
  
  private formatDate(date: Date): string {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return date.toLocaleString('fr-FR');
  }

  private extractItemQuantity(item: string): number {
    const matches = item.match(/\d+/);
    return matches ? +matches[0] : 1;
  }
}

 



