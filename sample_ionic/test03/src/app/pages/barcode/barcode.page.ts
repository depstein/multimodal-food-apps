import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LogService } from 'src/app/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {

  // constructor(private location: Location,
  //             private barcodeScanner: BarcodeScanner) { }
  constructor(private location: Location,
              private barcodeScanner: BarcodeScanner,
              private logService: LogService,
              private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.location.back();
  }

  onDClick() {
    this.barcodeScanner.scan().then(barcodeData => {
        const p = new Map<string, string>();
        p['modality'] = 'barcode';
        p['entry'] = barcodeData.text;
        this.logService.addEntry(p);
        this.router.navigateByUrl('/confirmation');
      }).catch(err => {
        console.log('Error', err);
      });
  }
}
