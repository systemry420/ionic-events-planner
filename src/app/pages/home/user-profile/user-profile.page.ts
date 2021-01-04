import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSequence } from 'protractor';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../../shared/user.interface'
import {TranslateService} from '@ngx-translate/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.authService.user.subscribe(data=>{
      this.userService.getUserData(data.id)
      .subscribe((d:any)=>{
        this.user = d
      })
    })
  }


  updateInfo() {
    this.authService.user.subscribe(user=>{
      this.userService.updateUserData(user.id, this.user)
      .then(res => {
        console.log(this.user);
      },
      error=>{
        console.log(error, "something went wrong");
      })
    })
  }

  onImagePicked(image) {
    console.log(image);
    this.user.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

}
