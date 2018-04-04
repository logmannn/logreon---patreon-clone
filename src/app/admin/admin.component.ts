import { Component } from '@angular/core';
import { ContributorService } from '../contributor.service';
import { Contributor } from '../contributor.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ContributorService]
})

export class AdminComponent {

  constructor(private contributorService: ContributorService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string, price: number) {
    let newContributor: Contributor = new Contributor(title, artist, description, price);
    this.contributorService.addContributor(newContributor);
  }

}
