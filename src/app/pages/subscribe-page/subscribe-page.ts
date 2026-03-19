import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
  // Modèle pour le formulaire :
    public id_inscription = { username: '', email: '', password: ''};
  
  // Gestion de l'affichage de l'erreur :
    public errorMessage: string | null = null;
  
    constructor(
      private authService: AuthService,
      private router: Router
    ) {}
  
    onSubmit(): void {
      this.errorMessage = null; // Réinitialisation du message
      this.authService.register(this.id_inscription).subscribe({
        next: () => {
          // Redirection vers la page de gestion ou le calculateur :
          this.router.navigate(['/recipe-manager']);
        },
        error: (err) => {
          this.errorMessage ="Identifiants invalides ou serveur indisponible.";
          //console.log('Indentifiants envoyés :', this.credentials)
          console.error('Erreur de connexion', err);
        }
      });
    }

}
