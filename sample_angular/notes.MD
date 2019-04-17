# Multimodal Food Journaling
### Angular Notes
1. Upload a file (.png, .jpg) which is a photo of food

```html
<input type="file" accept="image/*" (change)="onFileSelected($event)">
<button *ngIf="selectedFile" type="button" (click)="onUpload()">Upload</button>
```

```typescript
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const file = this.selectedFile;
    const filePath = 'uploads/filename'; // Stored in storage/uploads
    const task = this.afStorage.upload(filePath, file);
  }
```

2. Upload a file (.png, .jpg) which is a picture of a barcode

```typescript
// Same as above
```
##### Suggestion
    1. Push a unique ID into firebase database when uploading a image
    2. use that image as the file name of the uploaded file
    3. later retrieve all images uploaded by user through database
    4. match downloaded images to the user
    5. file use name userid-fileid

---

3. Text box to write a description

```html
<p>
  <label for="textArea1">Example textarea</label>
  <textarea class="form-control" id="textArea1" rows="3" [(ngModel)]="text"></textarea>
  <button (click)="onSubmit()">submit</button>
</p>
<hr>
<p>values</p>
<ul>
  <li *ngFor="let item of items | async">{{item.name}}</li>
</ul>
```

```typescript
  text:string = "";
  private itemsCollection:AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items', ref => ref.orderBy('date', 'asc'));
    this.items = this.itemsCollection.valueChanges();
  }

  onSubmit(){
    this.itemsCollection.add({name: this.text, date: new Date()}).then(doc => {
      console.log(doc.id);
    })
  }
```

##### Suggestion
    1. Use id for each entry
    2. add date to each entry

##### Question
    * Is multiline necessary?

3. Input field to enter a URL of a recipe page

```
Same as above
```

5. Input field to enter what they would search for in a food database

```
Same as above
```

6. Input field to enter a barcode

```
Same as above
```

---
### Some thoughts
1. Use a standarized format for each type of entry
```
{
    platform: "web",
    type: "img",
    content: "food",
    date: Mar 26, 2019
}

{
    platform: "mobile",
    type: "string",
    content: "barcode",
    message: "123123123",
    date: Mar 26, 2019
}

{
    platform: "google home",
    type: "string",
    content: "database search",
    message: "hamburger",
    date: Mar 26, 2019
}

{
    platform: "alexa",
    type: "description",
    content: "TBD",
    message: "ssssss",
    date: Mar 27, 2019
}
```
2. Assign each user an unique id, and ask them to login with id + keyword
3. Store images with in folders vs. images with id as part of filename
