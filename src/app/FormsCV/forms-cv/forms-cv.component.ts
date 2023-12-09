import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-cv',
  templateUrl: './forms-cv.component.html',
  styleUrls: ['./forms-cv.component.css'],
})
export class FormsCVComponent implements OnInit {
  cvForm!: FormGroup;
  file!: [null];
  nom: string = "";
  prenom: string = "";
  fonction: string = "";
  pseudo: string = "";
  tel: string = "";
  email: string = "";
  adresse: string = "";
  num: string = "";
  cp: string = "";
  ville: string = "";
  exp1: string = "";
  exp2: string = "";
  exp3: string = "";
  diplome: string = "";
  etudes: string = "";
  brevets: string = "";
  descriptionFonction: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.cvForm = this.fb.group({
      nom: ['', [Validators.required, CustomValidators.noSpecialChars()]],
      prenom: ['', [Validators.required, CustomValidators.noSpecialChars()]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.pattern('^[0-9]+$')],
      pseudo: ['', Validators.required],
      adresse: this.fb.group({
        rue: [''],
        num: [''],
        ville: [''],
        cp: [''],
      }),

      titreFonction: ['', Validators.required],
      experiences: this.fb.group({
        exp1: [''],
        exp2: [''],
        exp3: [''],
      }),

      diplomes: ['', Validators.required],
      etudes: ['', Validators.required],
      brevets: ['', Validators.required],
      descriptionFonction: [
        '',
        [Validators.required, Validators.maxLength(255)],
      ],
      certification: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.cvForm.valid) {
      console.log('Données du formulaire:', this.cvForm.value);
      this.router.navigate(['/validator']);
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}

export class CustomValidators {
  static noSpecialChars(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const regex = /^[a-zA-Z ]+$/;
      const valid = regex.test(control.value);
      return valid ? null : { specialChars: true };
    };
  }
}

