export interface Inscription {
    // Partie administrative
    email: string;
    password: string;
    confirmPassword: string;
    nom: string;
    prenom: string;
    dateNaissance: Date;
  
    // Partie personnelle
    genre: string;
    genreRecherche: string;
    couleurCheveux: string;
    couleurYeux: string;
    taille: number;
    poids: number;
    ville: string;
    biographie: string;
    pseudonyme: string;
  
    // Partie centres d'intérêts
    nourrituresBoissons: string[];
    loisirs: string[];
    voyages: string[];
    sorties: string[];
    films: string[];
  }
  
