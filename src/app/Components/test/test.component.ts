import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {

  constructor(private router: Router) {}

  seDeconnecter() {

    // Pour cet exemple, j'utiliserai un délai simulé pour représenter la déconnexion
    setTimeout(() => {
      // Redirection vers la page de connexion
      this.router.navigate(['/Connexion']);
      // Affichage d'un message de déconnexion dans la console
      console.log('Vous êtes déconnecté!');
    }, 100); 
  }
}

  
