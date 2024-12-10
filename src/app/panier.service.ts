import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Ceci rend le service accessible dans toute l'application
})
export class PanierService {
  panier: any[] = [];

  constructor() {}

  ajouterProduit(produit: any): void {
    this.panier.push(produit);
  }

  retirerProduit(id: number): void {
    this.panier = this.panier.filter(p => p.id !== id);
  }

  totalPanier(): number {
    return this.panier.reduce((total, produit) => total + produit.prix, 0);
  }
}
