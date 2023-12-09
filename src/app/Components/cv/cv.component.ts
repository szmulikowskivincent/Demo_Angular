import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})

export class CvComponent implements OnInit {
  cvForm!: FormGroup;
  nom: string = "";
  prenom: string = "";
  email: string = "";
  password: string = "";

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.cvForm = this.fb.group({
      nom: ['', [Validators.required, CustomValidators.noSpecialChars()]],
      prenom: ['', [Validators.required, CustomValidators.noSpecialChars()]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.cvForm.valid) {
      // Copier les données du formulaire
      const formValue = { ...this.cvForm.value };

      formValue.password = '*'.repeat(formValue.password.length);
      console.log('Données du formulaire (mot de passe masqué):', formValue);
      this.cvForm.reset();
      this.router.navigate(['/forms-cv']);
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
