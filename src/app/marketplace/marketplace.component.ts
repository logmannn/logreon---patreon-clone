import { Component } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {
  constructor(private router: Router) {}

  albums: Album[] = [
    new Album("Parlament's Best Hits", "Parlament", "The best songs from Parlament during mid 70s.", 1),
    new Album("The Miseducation of Laren Hill", "Laren Hill", "Laren Hill's groundbreaking intro album.", 2),
    new Album("What's Goin On", "Marvin Gaye", "Marvin Gaye's political and environmental album stating the conditions in the mid 70s.", 3),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience",
       "Second studio album by the English-American band, released in 1967.", 4)

  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };


}
