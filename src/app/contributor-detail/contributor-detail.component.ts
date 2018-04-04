import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Contributor } from '../contributor.model';
import { ContributorService } from '../contributor.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-contributor-detail',
  templateUrl: './contributor-detail.component.html',
  styleUrls: ['./contributor-detail.component.css'],
  providers: [ContributorService]
})

export class ContributorDetailComponent implements OnInit {
  contributorId: string;
  contributorToDisplay;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private contributorService: ContributorService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.contributorId = urlParameters['id'];
    });
    this.contributorToDisplay = this.contributorService.getContributorById(this.contributorId);
    }

  }
