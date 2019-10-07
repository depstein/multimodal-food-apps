export class EntryCard{

  date: Date;
  platform: string;
  entries: any[];


  constructor(day, entries, platform){
    this.date = new Date(day.seconds*1000);
    this.entries = entries; //will be a list -> entry,modality
    this.platform = platform;
  }

}
