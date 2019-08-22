import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ListingServiceService } from '../app/listing-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertCtrl: AlertController, public dataService: ListingServiceService) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

  async showPrompt(item?, index?) {
    const prompt = await this.alertCtrl.create({
      header: item ? "Edit Listing" : "Add Listing",
      message: item ? "Please edit listing..." : "Please enter listing...",
      inputs: [
        {
          name: 'address',
          placeholder: 'Address',
          value: item ? item.address : null
        },
        {
          name: 'price',
          placeholder: 'Price',
          value: item ? item.price : null
        },
        {
          name: 'description',
          placeholder: 'description',
          value: item ? item.description : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }

          }
        }
      ]
    });
    prompt.present();
  }

}
