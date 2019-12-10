import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-e-camera',
  templateUrl: './e-camera.page.html',
  styleUrls: ['./e-camera.page.scss'],
})
export class ECameraPage implements OnInit {

  index = -1;
  myphoto: any = null;
  info: string;

  constructor(private router: Router,
              private logService: LogService,
              private camera: Camera,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.index = parseInt(id, 10);
      this.myphoto = this.logService.data.entries[this.index]['data'];
    }
  }

  onPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
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
      if (this.index == -1) {
        const p = new Map<string, any>();
        p['modality'] = 'foodImg';
        p['entry'] = 'base64_img';
        p['data'] = this.myphoto;
        this.logService.addEntry(p);
      } else {
        this.logService.data.entries[this.index]['data'] = this.myphoto;
      }
      this.router.navigateByUrl('/entry');
    }
  }

}
