import { Component } from '@angular/core';
import { NewListingComponent } from './../new-listing/new-listing.component';
import { Listing } from './../listing.model';


@Component({
  selector: 'jazz',
  templateUrl: './jazz.component.html',
  styleUrls: ['./jazz.component.css']
})
export class JazzComponent {

  listings: Listing[] = [
    new Listing('Robert Johnson', 'Robert Johnson Collection', 'http/www.robertjohnson.com', 'Brian', 'brian@music.com', "blues"),
    new Listing('Son House', 'Son House', 'http/www.sonhouse.com', 'Caroline', 'caroline@somewhere.com', 'blues'),
  ];

  addListing(newListingFromChild: Listing) {
    this.listings.push(newListingFromChild);
  }

}
