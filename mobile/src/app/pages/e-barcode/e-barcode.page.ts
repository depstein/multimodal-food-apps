import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-e-barcode',
  templateUrl: './e-barcode.page.html',
  styleUrls: ['./e-barcode.page.scss'],
})
export class EBarcodePage implements OnInit {

  value = 'Nothing Scanned Yet';
  constructor(private router: Router,
              private logService: LogService,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  onScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      // console.log('Barcode data', barcodeData);
      this.value = barcodeData.text;
    }).catch(err => {
      // console.log('Error', err);
    });
  }

  onSave() {
    if (this.value === '') {
      return;
    } else {
      const p = new Map<string, string>();
      p['modality'] = 'database';
      p['entry'] = this.value;
      this.value = '';
      this.logService.addEntry(p);
      this.router.navigateByUrl('/entry');
    }
  }

}
