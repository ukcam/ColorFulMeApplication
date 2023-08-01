import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ActionSheetController } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.classValue = this.route.snapshot.params['condition']
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

}
