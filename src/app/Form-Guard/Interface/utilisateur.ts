export interface Utilisateur {

    role: string; 
    email: string; 
    Password: string;
    
    /*methode*/ 
    seConnecter(): void; 
    seDeconnecter(): void; 
  }
  
  export interface Administrateur extends Utilisateur {

    creerUtilisateur(utilisateur: Utilisateur): void; 
    supprimerUtilisateur(utilisateur: Utilisateur): void; 
  }
  
  let user: Utilisateur = {

    role: "utilisateur",
    email: "alice@example.com",
    Password: "************",
  
    seConnecter: function() {
      console.log("Utilisateur est connectée");
    },
    seDeconnecter: function() {
      console.log("Utilisateur est déconnectée");
    }
  };
  
  let admin: Administrateur = {

    role: "admin",
    email: "bob@example.com",
    Password: "************",

    seConnecter: function() {
      console.log("Admin est connecté");
    },
    seDeconnecter: function() {
      console.log("Admin est déconnecté");
    },
    creerUtilisateur: function(utilisateur: Utilisateur) {
      console.log("Admin a créé l'utilisateur " + utilisateur.email);
    },
    supprimerUtilisateur: function(utilisateur: Utilisateur) {
      console.log("Admin a supprimé l'utilisateur " + utilisateur.email);
    }
  };
  
