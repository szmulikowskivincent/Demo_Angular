import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceComponent } from './Components/exercice/exercice.component';
import { TestComponent } from './Components/test/test.component';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { AdminComponent } from './Form-Guard/admin/admin.component';
import { ConnexionComponent } from './Form-Guard/connexion/connexion.component';
import { LoginComponent } from './Form-Guard/login/login.component';
import { FormulaireInscriptionComponent } from './InscriptionForm/formulaire-inscription/formulaire-inscription.component';
import { FormsCVComponent } from './FormsCV/forms-cv/forms-cv.component';
import { CvComponent } from './Components/cv/cv.component';
import { ValidatorForemComponent } from './Components/validator-forem/validator-forem.component';

const routes: Routes = [
  {path: 'Exercices', component: ExerciceComponent},
  {path: 'Test', component: TestComponent},
  {path: 'Form', component: MyFormComponent},
  {path: 'add-item', component: AddItemComponent },
  {path: 'shopping-list', component: ShoppingListComponent },
  {path: 'Friends', component: FriendsComponent },
  {path: 'Add-article', component: AddItemComponent },
  {path: 'Admin', component: AdminComponent },
  {path: 'Connexion', component: ConnexionComponent },
  {path: 'Login', component: LoginComponent },
  {path: 'Inscription', component: FormulaireInscriptionComponent },
  { path: 'forms-cv', component: FormsCVComponent },
  { path: 'cv', component: CvComponent },
  { path: 'validator', component: ValidatorForemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

