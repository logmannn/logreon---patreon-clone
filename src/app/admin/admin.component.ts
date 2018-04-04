import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})

export class AdminComponent {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string, price: number) {
    let newAlbum: Album = new Album(title, artist, description, price);
    this.albumService.addAlbum(newAlbum);
  }

}
