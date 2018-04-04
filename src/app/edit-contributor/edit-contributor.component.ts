import { Component, Input, OnInit } from '@angular/core';
import { ContributorService } from '../contributor.service';

@Component({
  selector: 'app-edit-contributor',
  templateUrl: './edit-contributor.component.html',
  styleUrls: ['./edit-contributor.component.css'],
  providers: [ContributorService]
})
export class EditContributorComponent implements OnInit {
  @Input() selectedContributor;

  constructor(private contributorService: ContributorService) { }

  ngOnInit() {
  }

  beginUpdatingContributor(contributorToUpdate){
    this.contributorService.updateContributor(contributorToUpdate);
  }

  beginDeletingContributor(contributorToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.contributorService.deleteContributor(contributorToDelete);
    }
  }
}
