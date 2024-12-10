import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';  // Importer le service PanierService

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: any[] = [];
  total: number = 0;

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panier = this.panierService.panier;
    this.total = this.panierService.totalPanier();
  }

  retirerDuPanier(id: number): void {
    this.panierService.retirerProduit(id);
    this.total = this.panierService.totalPanier();
  }
}
