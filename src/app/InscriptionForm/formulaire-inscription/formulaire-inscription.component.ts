// src/app/formulaire-inscription/formulaire-inscription.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscription } from 'src/Models/inscription';

@Component({
  selector: 'app-formulaire-inscription',
  templateUrl: './formulaire-inscription.component.html',
  styleUrls: ['./formulaire-inscription.component.css'],
})

export class FormulaireInscriptionComponent {
redirectTo(arg0: string) {
throw new Error('Method not implemented.');
}

  inscriptionForm!: FormGroup;
  inscriptionData!: Inscription;
  email: string = "";
  password: string = "";
  lastname: string = "";
  firstname: string = "";
  birdate: any;
  genre: string = "";
  nourritureboisson: string = "";
  picture: any;
  profilPicture: any;
  confirmPassword: string = "";
  date: any;
  myForm: any;
  centreintérêts: string = ";"

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {

    this.inscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      genre: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      confirmPassword: ['', Validators.required],
      nourrituresBoissons: ['', Validators.required], 
      profilePicture: [null, Validators.required], // Ajuster la validation selon vos besoins
    });
  }

  onSubmit(): void {

    // Créez une copie des données du formulaire
    const formData = { ...this.inscriptionForm.value };
    this.inscriptionData = this.inscriptionForm.value;
    // Masque les mots de passe dans la copie des données
    formData.password = this.maskPassword(formData.password);
    formData.confirmPassword = this.maskPassword(formData.confirmPassword);
    // Affiche les données dans la console
    console.log('Données soumises:', formData);
    // Réinitialiser la valeur de profilePictureUrl après la soumission
    this.profilePictureUrl = null;
    // Vous pouvez également réinitialiser la valeur du champ dans le formulaire si nécessaire
    this.inscriptionForm.patchValue
    profilePicture: null;
    // Stocke les données dans le local storage
    this.saveToLocalStorage(formData);
  }

  saveToLocalStorage(data: Inscription): void {
    // Convertit l'objet JavaScript en chaîne JSON
    const jsonData = JSON.stringify(data);
    // Stocke les données dans le local storage avec une clé spécifique
    localStorage.setItem('inscriptionData', jsonData);
    // Réinitialiser le formulaire après la soumission
    this.inscriptionForm.reset();
  }
  // Fonction pour masquer le mot de passe avec des étoiles
  maskPassword(password: string | undefined): string {
    // Vous pouvez ajuster le nombre d'étoiles en fonction de vos besoins
    return password ? '*'.repeat(password.length) : '';
  }

  profilePictureUrl: string | null = null;

  onFileSelected(event: any): void {

    const file: File = event.target.files[0];

    // Reset profilePictureUrl to null
    this.profilePictureUrl = null;
  
    if (file) {
      // Vous pouvez utiliser FileReader pour lire l'image et obtenir une URL de données
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePictureUrl = e.target.result;
      };
      reader.readAsDataURL(file);
      // Vous pouvez également stocker le fichier dans le formulaire si nécessaire
      this.inscriptionForm.patchValue({
        profilePicture: file,
      });
    }
  }
}