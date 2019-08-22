import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ListingServiceService } from '../../app/listing-service.service';
import { InputDialogService } from '../../app/input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public toastCtrl: ToastController, public alertController:AlertController, public dataservice: ListingServiceService, public inputDialogService: InputDialogService) {}

 /** This function loads all of the items from the array or database */
  
  loadItems(){
    return this.dataservice.getItems();
  }


  /** These functions are called when a home listing is being shared by msg, twitter, whatsapp, or facebook */
  compilemsg(index):string{
    var msg = "Check out this house that is for sale" ;
    return msg.concat(" \n Sent from my Awesome App !");
  }

  regularShare(index){
    console.log("Shared using native sharing!");
    var msg = this.compilemsg(index);
    this.socialSharing.share(msg, null, null, null);
  }

  whatsappShare(index){
    console.log("Shared to whatsapp!");
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   }

   twitterShare(index){
    console.log("Shared to Twitter!");
    var msg  = this.compilemsg(index);
    this.socialSharing.shareViaTwitter(msg, null, null);
  }

  facebookShare(index){
    console.log("Shared to Facebook");
    var msg  = this.compilemsg(index);
     this.socialSharing.shareViaFacebook(msg, null, null);
   }
}
