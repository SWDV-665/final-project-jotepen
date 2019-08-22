import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingServiceService {

  cards = [
    { 
      address: '456 West Main',
      price: '123,400',
      description: '2 Bed, 1 Bath',
    },
    {
      address: '6790 West Palm',
      price: '300,000',
      description: 'Home on the beach...',

    }
  ];


  constructor() { 
    console.log('Hello ListingServiceProvider Provider');
  }

  getItems() {
    return this.cards;
  }

  removeItem(index) {
    this.cards.splice(index, 1);
  }

  addItem(item) {
    this.cards.push(item);
  }

  editItem(item, index) {
    this.cards[index] = item;
  }

}
