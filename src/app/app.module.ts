import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ExerciceComponent } from './Components/exercice/exercice.component';
import { TestComponent } from './Components/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { AddItemComponent } from './Components/add-item/add-item.component'
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { ItemArticleComponent } from './@output-@input/item-article/item-article.component';
import { AddArticleComponent } from './@output-@input/add-article/add-article.component';
import { LoginComponent } from './Form-Guard/login/login.component';
import { AdminComponent } from './Form-Guard/admin/admin.component';
import { ConnexionComponent } from './Form-Guard/connexion/connexion.component';
import { AuthGuard } from './Form-Guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireInscriptionComponent } from './InscriptionForm/formulaire-inscription/formulaire-inscription.component';
import { FormsCVComponent } from './FormsCV/forms-cv/forms-cv.component';
import { CvComponent } from './Components/cv/cv.component';
import { ValidatorForemComponent } from './Components/validator-forem/validator-forem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExerciceComponent,
    TestComponent,
    MyFormComponent,
    ShoppingListComponent,
    AddItemComponent,
    FriendsComponent,
    ItemArticleComponent,
    AddArticleComponent,
    LoginComponent,
    AdminComponent,
    ConnexionComponent,
    FormulaireInscriptionComponent,
    FormsCVComponent,
    CvComponent,
    ValidatorForemComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  
  providers: [AuthGuard, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
