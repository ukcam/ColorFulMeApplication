import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CapturedPhoto } from 'src/app/services/interfaces/user-photo.interface';

@Component({
  selector: 'app-camera-screen',
  templateUrl: './camera-screen.page.html',
  styleUrls: ['./camera-screen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CameraScreenPage implements OnInit {

  classValue = "imageNormal";
  currentFilter = ""

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    this.classValue = this.route.snapshot.params['condition']
    switch (this.classValue) {
      case 'imageNormal' : this.currentFilter = "Normal"; break;
      case 'imageRedGreen' : this.currentFilter = "Red Green"; break;
      case 'imageDeuteranopia' : this.currentFilter = "Deuteranopia"; break;
      case 'imageProtanopia' : this.currentFilter = "Protanopia"; break;
      default: this.currentFilter = "Normal"; break;
    }
    await this.photoService.loadSaved();
  }

  public async showActionSheet(photo: CapturedPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => { }
      }]
    });
    await actionSheet.present();
  }

  openAssessment() {
    this.router.navigate(['assessment', this.classValue]);
  }

  public async showActionSheetFilter() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Filters',
      buttons: [{
        text: 'Normal',
        handler: () => {
          this.photoService.loadpictures('imageNormal');
        }
      }, {
        text: 'Red Green',
        handler: () => {
          this.photoService.loadpictures('imageRedGreen');
        }
      }, {
        text: 'Deuteranopia',
        handler: () => {
          this.photoService.loadpictures('imageDeuteranopia');
        }
      },
      {
        text: 'Protanopia',
        handler: () => {
          this.photoService.loadpictures('imageProtanopia');
        }
      }]
    });
    await actionSheet.present();
  }
}
