import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {

  constructor(private router: Router,
              private logService: LogService,
            public alertController: AlertController) { }

  ngOnInit() {
  }

  navigate(num: number) {
    switch (num) {
      case 0:
      this.router.navigateByUrl('e-barcode');
      break;
      case 1:
      this.router.navigateByUrl('e-description');
      break;
      case 2:
      this.router.navigateByUrl('e-search');
      break;
      case 3:
      this.router.navigateByUrl('e-voice');
      break;
      case 4:
      this.router.navigateByUrl('e-url');
      break;
      case 5:
      this.router.navigateByUrl('e-camera');
      break;
    }
  }

  onSubmit() {
    console.log(this.logService.data.entries.length)
    this.logService.setName('Kim');
    this.logService.setPlatform('ios');
    this.logService.push();
  }

  editEntry(){

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete Modality',
      message: 'Are you sure you want to delete it?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
