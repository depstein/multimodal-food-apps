import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LogService } from 'src/app/services/log.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  myphoto: any;

  info: string;

  constructor(private router: Router,
              private location: Location,
              private camera: Camera,
              private logService: LogService) { }

  ngOnInit() {
  }

  onClick() {
    this.location.back();
  }

  onDClick() {


    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // const base64Image = 'data:image/jpeg;base64,' + imageData;

      // this.img = 'data:image/jpeg;base64,' + imageData;

      // this.myphoto = 'data:image/jpeg;base64,' + imageData;
      // this.base64.encodeFile(imageData).then((base64File: string) => {
      //   this.myphoto = base64File;
      // })
      // const p = new Map<string, any>();
      // p['modality'] = 'foodImg';
      // p['entry'] = base64Image;
      // this.logService.addEntry(p);

      this.myphoto = 'data:image/jpeg;base64,' + imageData;

      const p = new Map<string, any>();
      p['modality'] = 'foodImg';

      // const imageBlob = this.dataURItoBlob(this.myphoto);
      // const imageFile = new File([imageBlob], 'a.jpeg', { type: 'image/jpeg' });

      // p['entry'] = this.dataURLtoFile(this.myphoto, 'a.jpg');

      p['entry'] = 'base64_img';
      // p['data'] = this.myphoto;
      p['data'] = this.myphoto;

      this.logService.addEntry(p);


     }, (err) => {
      // Handle error
      this.info = err;
     });
  }

  onSave() {
    this.router.navigateByUrl('/confirmation');
  }

}
