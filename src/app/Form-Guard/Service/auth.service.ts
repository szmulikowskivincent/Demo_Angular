import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/Form-Guard/Interface/utilisateur';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticateUser: any;

  constructor(private http: HttpClient) {}

  // Simuler le hachage du mot de passe côté client (ne le faites pas en production)
  hashPassword(password: string): string {
    return password;
  }

  // Appel à l'API pour enregistrer l'utilisateur avec mot de passe haché
  register(username: string, password: string): Observable<any> {
    const hashedPassword = this.hashPassword(password);
    const user = { username, password: hashedPassword };
    return this.http.post<any>('/api/register', user);
  }

  seDeconnecter: any;
  
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
