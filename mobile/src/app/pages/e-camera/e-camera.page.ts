import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-e-camera',
  templateUrl: './e-camera.page.html',
  styleUrls: ['./e-camera.page.scss'],
})
export class ECameraPage implements OnInit {


  myphoto: any = null;
  info: string;

  constructor(private router: Router,
              private logService: LogService,
              private camera: Camera) { }

  ngOnInit() {
  }

  onPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
      this.info = err;
     });
  }

  onSave() {
    if (this.myphoto == null) {
      return;
    } else {
      const p = new Map<string, any>();
      p['modality'] = 'foodImg';
      p['entry'] = 'base64_img';
      p['data'] = this.myphoto;
      this.logService.addEntry(p);
      this.router.navigateByUrl('/entry');
    }
  }

}
