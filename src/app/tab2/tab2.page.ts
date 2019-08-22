import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ListingServiceService } from '../../app/listing-service.service';
import { InputDialogService } from '../../app/input-dialog.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertController:AlertController, public dataservice: ListingServiceService, public inputDialogService: InputDialogService) {}

  /** This function loads all of the items from the array or database */
  
  loadItems(){
    return this.dataservice.getItems();
  }
  

 /** This function allows the user to delete an existing listing */  
  removeItem(item, index)
  {
  console.log("Removing Listing...", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Listing - ' +index+ "...",
    duration: 3000
  });

  this.dataservice.removeItem(index);
  }


  /** This function allows the user to edit an existing listing */
  editItem(item, index)
  {
  console.log("Edit Listing...", item, index);
  const toast = this.toastCtrl.create({
    message: 'Editing Listing - ' +index+ "...",
    duration: 3000
  });

  this.inputDialogService.showPrompt(item, index);
  }


 /** This function prompts the user to add a new listing */
  addItem()
  {
    console.log("Adding Listing");
    this.inputDialogService.showPrompt();
  }
}