import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent {
  /*Déclaration variable*/
  départ: any;

  minutes: number = 0; // minutes du chronomètre
  seconds: number = 0; // secondes du chronomètre
  startMinutes: number = 2; // minutes de départ du chronomètre
  running: boolean = false; // état du chronomètre (en marche ou en pause)
  subscription: any; // abonnement au timer observable

  constructor() {
    this.minutes = this.startMinutes;
  }

  // Méthode pour démarrer le chronomètre
  startTimer() {
    this.running = true; // changer l'état du chronomètre
    // créer un timer observable qui émet une valeur chaque seconde
    const source = timer(0, 1000);
    // s'abonner au timer observable
    this.subscription = source.subscribe((val) => {
      // décrémenter les secondes
      this.seconds--;
      // si les secondes atteignent 0, les remettre à 59 et décrémenter les minutes
      if (this.seconds === -1) {
        this.seconds = 59;
        this.minutes--;
      }
      // si les minutes et les secondes atteignent 0, arrêter le chronomètre
      if (this.minutes === 0 && this.seconds === 0) {
        this.stopTimer();
      }
    });
  }
  
  stopTimer() {
    throw new Error('Method not implemented.');
  }

  // Méthode pour mettre en pause le chronomètre
  pauseTimer() {
    this.running = false; // changer l'état du chronomètre
    // se désabonner du timer observable
    this.subscription.unsubscribe();
  }

  // Méthode pour réinitialiser le chronomètre
  resetTimer() {
    this.running = false; // changer l'état du chronomètre
    // se désabonner du timer observable
    this.subscription.unsubscribe();
    // remettre les minutes et les secondes à zéro
    this.minutes = 0;
    this.seconds = 0;
  }
}
