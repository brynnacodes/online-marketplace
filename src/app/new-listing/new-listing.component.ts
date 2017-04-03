import { Component, Output, EventEmitter } from '@angular/core';
import { Listing } from './../listing.model';

@Component({
  selector: 'new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent {
@Output() newListingSender = new EventEmitter();

  submitForm( artist: string, album: string, image: string, name: string, email: string, category: string) {
    var newListingToAdd: Listing = new Listing(artist, album, image, name, email, category);
    this.newListingSender.emit(newListingToAdd);
  }
}
