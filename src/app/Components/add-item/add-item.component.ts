import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/Services/shopping-list.service';

interface addItemItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})

export class AddItemComponent {
  newItem: string = '';
  quantity: number = 1;
  formattedDateTime: string = '';
  isQuantityExceeded: boolean = false;
  itemList: string[] = [
    'Coca',
    'Pain',
    'Lait',
    'Beurre',
    'Shampoing',
    'Oeufs',
    'Riz',
    'Légume',
  ];

  constructor(
    public shoppingListService: ShoppingListService,
    private router: Router
  ) {}

  addItem() {
    const shoppingList = this.shoppingListService.getShoppingList();
    const index = shoppingList.findIndex(item => item.includes(this.newItem));
    
    if (index === -1 && shoppingList.length < 5) {
        const itemWithQuantity = `${this.newItem} (Qty: ${this.quantity})`;
        this.shoppingListService.addItem(itemWithQuantity);
        this.newItem = '';
        this.quantity = 1;
        this.isQuantityExceeded = false;
        // Ajout d'un console.log pour afficher les articles ajoutés
        console.log(`Article ajouté: ${itemWithQuantity}`);
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    } else {
      // Affichage d'une alerte spécifique pour la limite atteinte
      if (shoppingList.length >= 5) {
        alert('Limite d\'articles atteinte (maximum 5 articles) !');
      } else {
        alert('Article déjà dans la liste !');
      }
    }
  }

  /* l'ajout de l'élément à la liste n'est effectué que si l'élément n'existe pas déjà (index === -1) 
  et si la liste n'a pas atteint la limite de 5 éléments (shoppingList.length < 5). 
  Sinon, aucune action n'est effectuée, ce qui évite d'ajouter un élément en double.*/

  // Méthode pour déterminer si l'input de quantité doit être désactivé
  isSubmitDisabled(): boolean {
    return this.quantity > 5;
  }

  //Router list-articles sur component shopping-list
  navigateToShoppingList() {
    this.router.navigate(['/shopping-list']);
  }
}
