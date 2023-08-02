import { Directive, ElementRef, Injectable, Renderer2 } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Platform } from '@ionic/angular';
import { CapturedPhoto } from './interfaces/user-photo.interface';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
@Directive({ 'selector': 'ion-img' })
export class PhotoService {
  public photos: CapturedPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';
  checkBoxed = "true"

  constructor(private platform: Platform, private el: ElementRef, private renderer: Renderer2, private router: Router) { }

  public async loadSaved() {
    const photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = JSON.parse(photoList.value || '') || [];
    if (!this.platform.is('hybrid')) {
      for (let photo of this.photos) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }

  public async addNewToGallery(filter: any) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
      allowEditing: true
    });

    const savedImageFile = await this.savePicture(capturedPhoto, filter);
    this.photos.unshift(savedImageFile);

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  private async savePicture(photo: Photo, filter?: any) {
    const base64Data = await this.readAsBase64(photo);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (this.platform.is('hybrid')) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
        filter
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
        filter
      };
    }
  }

  private async readAsBase64(photo: Photo) {
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path ? photo.path : '',
      });
      return file.data;
    } else {
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      return (await this.convertBlobToBase64(blob)) as string;
    }
  }

  public async deletePicture(photo: CapturedPhoto, position: number) {
    this.photos.splice(position, 1);
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });

    const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data,
    });
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  
  originalUrl = this.router.url
  newOriginalUrl = this.originalUrl.replace("/camera/", "")

  public async loadpictures(value: string) {
    /*if (isTrue) {
      console.log(this.newOriginalUrl)
      this.checkBoxed = "true"
      this.router.navigate(['camera', this.newOriginalUrl]);
      /*this.renderer.removeClass(this.el, '.imageNormal');
      this.renderer.removeClass(this.el, '.imageProtanopia');
      this.renderer.removeClass(this.el, '.imageTritanopia');
      this.renderer.removeClass(this.el, '.imageDeuteranopia');
      this.renderer.addClass(this.el, '.imageNormal');
    } else {
      //this.loadSaved();
      this.checkBoxed = "false"
      this.router.navigate(['camera', 'imageNormal']);
    }*/
    switch (value){
      case 'imageNormal': this.router.navigate(['camera', 'imageNormal']); break
      case 'imageProtanopia': this.router.navigate(['camera', 'imageProtanopia']); break
      case 'imageRedGreen': this.router.navigate(['camera', 'imageRedGreen']); break
      case 'imageDeuteranopia': this.router.navigate(['camera', 'imageDeuteranopia']); break
      default: this.router.navigate(['camera', 'imageNormal']); break
    }
  }
}
