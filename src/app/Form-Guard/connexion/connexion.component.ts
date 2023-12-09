import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Form-Guard/Service/auth.service';
import { CookieService } from 'ngx-cookie-service';

interface Utilisateur {
  role: string;
  email: string;
  Password: string;

  /*methode*/
  seConnecter(): void;
  seDeconnecter(): void;
}

interface Administrateur extends Utilisateur {
  creerUtilisateur(utilisateur: Utilisateur): void;
  supprimerUtilisateur(utilisateur: Utilisateur): void;
}

let user: Utilisateur = {
  role: 'utilisateur',
  email: 'alice@example.com',
  Password: '************',

  seConnecter: function () {
    console.log('Utilisateur est connectée');
  },
  seDeconnecter: function () {
    console.log('Utilisateur est déconnectée');
  },
};

let admin: Administrateur = {
  role: 'admin',
  email: 'bob@example.com',
  Password: '************',

  seConnecter: function () {
    console.log('Admin est connecté');
  },
  seDeconnecter: function () {
    console.log('Admin est déconnecté');
  },
  creerUtilisateur: function (utilisateur: Utilisateur) {
    console.log("Admin a créé l'utilisateur " + utilisateur.email);
  },
  supprimerUtilisateur: function (utilisateur: Utilisateur) {
    console.log("Admin a supprimé l'utilisateur " + utilisateur.email);
  },
};

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})

export class ConnexionComponent implements OnInit {
  
  isSubmitted = false;
  loginForm!: FormGroup;
  role: string = '';
  email: string = '';
  password: string = '';
  pattern: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // Ajouter la fonction de validation d'email personnalisée
  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const emailPattern = /^lara@gmail\.com$/i; // Modèle d'adresse email
    if (control.value && !emailPattern.test(control.value)) {
      alert('🚫 Format email invalide!')
      return { invalidEmail: true };
    }
    return null;
  }

  get formControls() {
    return this.loginForm.controls;
  }

  seConnecter() {
    console.log(this.getHiddenPasswordValue(this.loginForm.value));
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const role = this.loginForm.value.role;

    if (role !== 'admin' && role !== 'utilisateur') {
      console.error('Rôle invalide');
      alert('🚫 Role invalide!');
      return;
    }

    if (
      (role === 'admin' && this.loginForm.value.password === 'Moi1971moi') ||
      (role === 'utilisateur' && this.loginForm.value.password === 'root')
    ) {
      const confirmed = confirm('Confirmez votre rôle?');

      if (confirmed) {
        const userCredentials = JSON.stringify(this.loginForm.value);
        this.cookieService.set('userCredentials', userCredentials, {
          expires: 1,
        });

        localStorage.setItem(
          'userCredentials',
          JSON.stringify(this.loginForm.value)
        );
        this.router.navigateByUrl('/Login');
      } else {
        console.error('Confirmation du rôle annulée');
      }
    } else {
      console.error('Mot de passe incorrect');
      this.router.navigate(['./'], { relativeTo: this.route });
    }
  }

  getHiddenPasswordValue(formValue: any): any {
    // Créer une copie du formulaire pour éviter de modifier l'original
    const hiddenValue = { ...formValue };
    // Masquer le mot de passe avec des étoiles (ou un autre motif de votre choix)
    hiddenValue.password = '*'.repeat(formValue.password.length);

    return hiddenValue;
  }
}
