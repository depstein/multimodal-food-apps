import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LogService } from 'src/app/services/log.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-e-barcode',
  templateUrl: './e-barcode.page.html',
  styleUrls: ['./e-barcode.page.scss'],
})
export class EBarcodePage implements OnInit {

  index = -1;
  value = 'Nothing Scanned Yet';
  constructor(private router: Router,
              private logService: LogService,
              private barcodeScanner: BarcodeScanner,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.index = parseInt(id, 10);
      this.value = this.logService.data.entries[this.index]['entry'];
    }
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
    if (this.value === 'Nothing Scanned Yet') {
      return;
    } else {
      if (this.index === -1) {
        const p = new Map<string, string>();
        p['modality'] = 'barcode';
        p['entry'] = this.value;
        this.logService.addEntry(p);
      } else {
        this.logService.data.entries[this.index]['entry'] = this.value;
      }
      this.value = '';
      this.router.navigateByUrl('/entry');
    }
  }

}
