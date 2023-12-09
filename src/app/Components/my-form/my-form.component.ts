import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})

export class MyFormComponent {
  @Input() titre!: string;
  @Input() message!: string;

  Login: string = '';
  Password: string = '';
  loginForm: any;
  defaultForm: string = '';
  defaultPassword: string = '';
  valeur: string = '';
  alertVisible = false;
  showAlert: boolean = false;

  form = new FormGroup({
  name: new FormControl(),
  rollno: new FormControl(),
  });

  onSubmit(): void {
    console.log('La valeur soumise est : ' + this.valeur);
  }

  onAlert(): void {
    this.alertVisible = !this.alertVisible;
  }
}
