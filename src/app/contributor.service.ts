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
    this.contributors.push(newContributor);
  }

  getContributorById(contributorId: string) {
    return this.database.object('contributors/' + contributorId);
  }

  updateContributor(localUpdatedContributor) {
    let contributorEntryInFirebase = this.getContributorById(localUpdatedContributor.$key);
    contributorEntryInFirebase.update({title: localUpdatedContributor.title,
                                artist: localUpdatedContributor.artist,
                                description: localUpdatedContributor.description});
  }

  deleteContributor(localContributorToDelete) {
    let contributorEntryInFirebase = this.getContributorById(localContributorToDelete.$key);
    contributorEntryInFirebase.remove();
  }

}
