import { Component } from '@angular/core';
import { NewListingComponent } from './../new-listing/new-listing.component';
import { Listing } from './../listing.model';

@Component({
  selector: 'classical',
  templateUrl: './classical.component.html',
  styleUrls: ['./classical.component.css']
})
export class ClassicalComponent {
  listings: Listing[] = [];

  addListing(newListingFromChild: Listing) {
    this.listings.push(newListingFromChild);
  }

}
