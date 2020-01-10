import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {

  modalities_list = []

  constructor(private router: Router,
    private logService: LogService,
    private alertController: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async onBack() {
    if (this.logService.data.entries.length !== 0) {
      // has data
      const alert = await this.alertController.create({
        header: 'Are you sure?',
        message: 'Do you wish to clear all entries before going back to home page?',
        buttons: [
          {
            text: 'Save draft',
            handler: () => {
              this.router.navigateByUrl('/history');
            }
          }, {
            text: 'Delete draft',
            cssClass: 'delete',
            handler: () => {
              this.logService.data.entries = [];
              this.router.navigateByUrl('/history');
            }
          }, {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              // console.log('Confirm Cancel: blah');
            }
          }
        ]
      });
      await alert.present();
    } else {
      this.router.navigateByUrl('/history');
    }
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

  async onSubmit() {
    // this.logService.setName('Yuqi3');
    // this.logService.setPlatform('ios');
    if(this.logService.data.entries.length === 0) {
      const alert = await this.alertController.create({
        header: 'Warning!',
        message:'You are not allowed to push empty entry',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
      await alert.present();
      return;
    }
    this.logService.push(()=>{this.router.navigateByUrl('/history'); this.logService.clear();});
    
  }

  async onRemove(index) {

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure? Deletion is unrecoverable',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            // console.log('Confirm Okay');
            this.logService.data.entries = this.logService.data.entries.filter((entry) => {
              return entry !== this.logService.data.entries[index];
            });
          }
        }
      ]
    });
    await alert.present();
  }

  onEdit(index) {
    const m = this.logService.data.entries[index]['modality'];
    if (m === 'foodDsrp') {
      this.router.navigateByUrl('e-description/' + index);
    } else if (m === 'foodImg') {
      this.router.navigateByUrl('e-camera/' + index);
    } else if (m === 'barcode') {
      this.router.navigateByUrl('e-barcode/' + index);
    } else if (m === 'database') {
      this.router.navigateByUrl('e-search/' + index);
    } else if (m === 'url') {
      this.router.navigateByUrl('e-url/' + index);
    } else if (m === 'voice') {
      this.router.navigateByUrl('e-voice/' + index);
    }
  }

}
