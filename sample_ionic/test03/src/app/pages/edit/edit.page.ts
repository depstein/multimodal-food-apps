import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LogService } from 'src/app/services/log.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private logService: LogService,
              private camera: Camera,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  onBack() {
    this.location.back();
  }

  onRetake() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      this.logService.data.entries[this.id]['data'] = 'data:image/jpeg;base64,' + imageData;

     }, (err) => {
      // Handle error
      // this.info = err;
     });
  }

  onRescan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.logService.data.entries[this.id]['entry'] = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }


}
