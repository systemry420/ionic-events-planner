import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core'
import { EventEmitter } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @ViewChild('filePicker') filePickerRef
  @Output() imagePick = new EventEmitter();
  selectedImage: string
  usePicker = false

  constructor(private platform: Platform) { }

  ngOnInit() {
    if(
      (this.platform.is('mobile') && !this.platform.is('hybrid')) ||
      this.platform.is('desktop')
      ) {
        this.usePicker = true
    }
  }

  onPickImage() {
    if(!Capacitor.isPluginAvailable('Camera')) {
      this.filePickerRef.nativeElement.click()
      return;
    }

    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.DataUrl
    }).then(image => {
      this.selectedImage = image.base64String
      this.imagePick.emit(image)
    }).catch(error => {
      console.log(error);
      this.filePickerRef.nativeElement.click()
    })
  }

  onFileChosen(ev) {
    const pickedFile = (ev.target as HTMLInputElement).files[0]
    if(!pickedFile) {
      return;
    }

    const fr = new FileReader()
    fr.onload = () => {
      const dataUrl = fr.result.toString()
      this.selectedImage = dataUrl
      this.imagePick.emit(pickedFile)
    }
    fr.readAsDataURL(pickedFile)
  }

}
