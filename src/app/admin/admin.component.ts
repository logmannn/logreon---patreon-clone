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

  submitForm(organization: string, project: string, description: string, value: number) {
    let Rewards = {low: {value: value}};
    let newContributor: Contributor = new Contributor(organization, project, description, Rewards);
    this.contributorService.addContributor(newContributor);
  }
}
