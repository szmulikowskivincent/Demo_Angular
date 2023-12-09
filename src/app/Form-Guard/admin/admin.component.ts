import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  seDeconnecter(){
  // Appel de la méthode seConnecter du service AuthService avec le nom et le mot de passe de l'utilisateur//
      // Si la connexion réussit, rediriger vers la page Admin
      (this.router.navigate(['/Connexion']),
      // Sinon, afficher un message d'erreur
      console.log('vous êtes déconnecté!')
    );
  }
}


