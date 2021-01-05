import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSequence } from 'protractor';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../../shared/user.interface'
import {TranslateService} from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ToastService } from 'src/app/services/toast/toast.service';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    address: '',
    job: '',
    mobileNumber: '',
    age: 0,
    gender: '',
    email: '',
    events: [],
    password: '',
    image: ''
  };

  constructor(
    public translate: TranslateService,
    private firestore: AngularFirestore,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private alertCtrl: AlertService,
    private toast: ToastService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getUser()
  }

  userData = JSON.parse(localStorage.getItem('userData'))
  getUser() {
    if(this.userData) {
      console.log(this.userData);
      this.userService.getUserData(this.userData.id)
      .subscribe((d:any)=>{
        this.user = d
      })
    }
  }

  updateInfo() {
    if(this.userData) {
      this.userService.updateUserData(this.userData.id, this.user)
      .then(res => {
        this.toast.presentToast("Your info has been updated successfully!")
      },
      error=>{
        this.alertCtrl.presentAlert("Something went wrong!")
      })
    }
  }
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;

  onImagePicked(image) {
    console.log(image);
    let dataUrl = image.dataUrl.substr(22)
    console.log(dataUrl.substr(0, 10));

    // this.profileImage = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    let upload = base64toBlob(dataUrl, 'image/' + image.format)

    if(this.userData) {
      const filePath = this.userData.id;
      const storageRef = this.afStorage.ref(filePath);
      const uploadTask = this.afStorage.upload(filePath, upload);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe(downloadURL => {
            this.user.image = downloadURL
            console.log('image uploaded successfully', this.user);
            this.updateInfo()
          });
        })
      ).subscribe();
    }
  }

}