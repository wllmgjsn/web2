| URI | Méthode HTTP | Auths? | Opération |
|---|---|---|---|
| **`films`** | GET | Non | READ ALL : Lire toutes les ressources de la collection |
| **`films/:id`** | GET | Non | READ ALL : Lire une ressource de la collection |
| **`films`** | POST | Oui | CREATE ONE : Créer une ressource de la collection basée sur un body au format `{title: string; director: string;  duration: number;  budget?: number;  description?: string;  imageUrl?: string;  }` |
| **`auths/register`** | POST | JWT | CREATE ONE : Créer un une ressource et un token d'authentification basé sur un body au format `{username : string, password : string}` |
| **`auths/login`** | POST | JWT | CREATE ONE : Créer un token d'authentification basée sur un body au format `{username : string, password : string}` |
| **`comments`** | GET | JWT | READ ALL FILTERED : Lire toutes les ressources de la collection et pouvoir les filtrer  |
| **`comments`** | POST | JWT | CREATE ONE : Créer une ressource basée sur un body au format `{title : string, comment : string, userId : number}` |
| **`comments/:id`** | DELETE | JWT | DELETE : supprimer une ressource de la collection
-