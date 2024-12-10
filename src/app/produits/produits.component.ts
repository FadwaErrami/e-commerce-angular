import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';  // Importer le service PanierService

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits = [
    { id: 1, nom: 'Chaise rembourrée ', prix: 100, image: 'https://media.gettyimages.com/id/1369682794/fr/photo/white-chair-taken-in-studio-with-white-background.jpg?s=612x612&w=0&k=20&c=LnHX3hOkLDpKTNcBEV0zg3-99DNlQ041TrXyS7vARSg=' },
    { id: 2, nom: 'Fauteuil relax : ', prix: 150, image: 'https://media.gettyimages.com/id/154926620/fr/photo/un-fauteuil.jpg?s=612x612&w=0&k=20&c=VDD9tcULACnajn1OgXgwav6zWOXb15tqagFmASZJ4oc=' },
    { id: 3, nom: 'fauteuil', prix: 200, image: 'https://media.gettyimages.com/id/1347244017/fr/photo/two-modern-yellow-armchairs-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XiyzejGc_D3duRKl19S03Rta8LTEm2BsJ0J2nH9fhRU=' },
    { id: 4, nom: 'Fauteuil confortable ', prix: 100, image: 'https://img.freepik.com/photos-premium/canape-rouge-est-represente-fond-blanc_900958-3678.jpg?ga=GA1.1.1262603095.1729892095&semt=ais_hybrid' },
    { id: 5, nom: 'Fauteuil : ', prix: 150, image: 'https://img.freepik.com/photos-premium/chaise-rouge-jambes-bois_81048-23089.jpg?ga=GA1.1.1262603095.1729892095&semt=ais_hybrid' },
    { id: 6, nom: 'fauteuil', prix: 200, image: 'https://img.freepik.com/photos-gratuite/chaise-bleue-est-montree-photo_505751-3816.jpg?ga=GA1.1.1262603095.1729892095&semt=ais_hybrid' }];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {}

  ajouterAuPanier(produit: any): void {
    this.panierService.ajouterProduit(produit);
  }
}
