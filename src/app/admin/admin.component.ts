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

  submitForm(organization: string, project: string, description: string, lowValue: number, lowDescription: string, mediumValue: number, mediumDescription: string, highValue: number, highDescription: string) {
    let Rewards = {low: {value: lowValue, description: lowDescription},
                    medium: {value: mediumValue, description: mediumDescription},
                    high: {value: highValue, description: highDescription}
                  };
    let newContributor: Contributor = new Contributor(organization, project, description, Rewards);
    this.contributorService.addContributor(newContributor);
  }
}
