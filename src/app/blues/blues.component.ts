import { Component } from '@angular/core';
import { Listing } from './../listing.model';
import { NewListingComponent } from './../new-listing/new-listing.component';

@Component({
  selector: 'blues',
  templateUrl: './blues.component.html',
  styleUrls: ['./blues.component.css']
})
export class BluesComponent {
  bluesListings: Listing[] = [
    new Listing('Robert Johnson', 'Robert Johnson Collection', 'http/www.robertjohnson.com', 'Brian', 'brian@music.com', "blues"),
    new Listing('Son House', 'Son House', 'http/www.sonhouse.com', 'Caroline', 'caroline@somewhere.com', 'blues'),
   ];

}
