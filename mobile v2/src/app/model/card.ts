export class EntryCard{

  date: Date;
  platform: string;
  entries: any[];
  docId: string;


  constructor(day, entries, platform, id){
    this.date = new Date(day.seconds*1000);
    this.entries = entries; //will be a list -> entry,modality
    this.platform = platform;
    this.docId = id;
  }

}
