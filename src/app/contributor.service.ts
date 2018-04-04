import { Injectable } from '@angular/core';
import { Contributor } from './contributor.model';
// import { ALBUMS } from './mock-contributor';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ContributorService {
  contributors: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.contributors = database.list('contributors');
  }

  getContributors() {
  return this.contributors;
  }

  addContributor(newContributor: Contributor) {
    console.log("reached");
    console.log(newContributor);
    this.contributors.push(newContributor);
  }

  getContributorById(contributorId: string) {
    return this.database.object('contributors/' + contributorId);
  }

  updateContributor(localUpdatedContributor) {
    console.log("updated");
    let contributorEntryInFirebase = this.getContributorById(localUpdatedContributor.$key);
    contributorEntryInFirebase.update({organization: localUpdatedContributor.organization,
                                project: localUpdatedContributor.project,
                                description: localUpdatedContributor.description, rewards: localUpdatedContributor.rewards});

  }

  deleteContributor(localContributorToDelete) {
    let contributorEntryInFirebase = this.getContributorById(localContributorToDelete.$key);
    contributorEntryInFirebase.remove();
  }

}
