import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camera-screen',
  templateUrl: './camera-screen.page.html',
  styleUrls: ['./camera-screen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CameraScreenPage implements OnInit {

  classValue = "imageNormal"


  constructor(
    public photoService: PhotoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.classValue = this.route.snapshot.params['condition']

  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
