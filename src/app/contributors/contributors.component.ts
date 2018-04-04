import { Component, OnInit } from '@angular/core';
import { Contributor } from '../contributor.model';
import { Router } from '@angular/router';
import { ContributorService } from '../contributor.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css'],
  providers: [ContributorService]
})

export class ContributorComponent implements OnInit {
  contributors: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private contributorService: ContributorService) {}

  ngOnInit(){
    this.contributors = this.contributorService.getContributors();
  }

  goToDetailPage(clickedContributor) {
    this.router.navigate(['contributors', clickedContributor.$key]);
  };


}
