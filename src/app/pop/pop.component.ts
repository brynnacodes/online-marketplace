import { Component } from '@angular/core';
import { NewListingComponent } from './../new-listing/new-listing.component';
import { Listing } from './../listing.model';

@Component({
  selector: 'pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent {

  listings: Listing[] = [
    new Listing('Robert Johnson', 'Robert Johnson Collection', 'http/www.robertjohnson.com', 'Brian', 'brian@music.com', "blues"),
    new Listing('Son House', 'Son House', 'http/www.sonhouse.com', 'Caroline', 'caroline@somewhere.com', 'blues'),
  ];

  addListing(newListingFromChild: Listing) {
    this.listings.push(newListingFromChild);
  }

}
