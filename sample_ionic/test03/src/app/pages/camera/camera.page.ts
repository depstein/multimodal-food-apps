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

      this.myphoto = 'data:image/jpeg;base64,' + imageData;

      const p = new Map<string, any>();
      p['modality'] = 'foodImg';


      p['entry'] = 'base64_img';
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
