import { Component, ContentChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-assessment-screen',
  templateUrl: './assessment-screen.page.html',
  styleUrls: ['./assessment-screen.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class AssessmentScreenPage implements OnInit {
  plate1!: string;
  plate2!: string;
  plate3!: string;
  plate4!: string;
  plate5!: string;
  plate6!: string;
  plate7!: string;
  plate8!: string;
  plate9!: string;
  plate10!: string;
  plate11!: string;
  plate12!: string;
  plate13!: string;
  plate16!: string;
  plate17!: string;

  deuteran = 0
  protan = 0
  redGreen = 0
  total = 0
  isModalOpen = false;

  condition = ""

  resultString = ""

  imageContainer = [
    "plate1",
    "plate2",
    "plate3",
    "plate4",
    "plate5",
    "plate6",
    "plate7",
    "plate8",
    "plate9",
    "plate10",
    "plate11",
    "plate12",
    "plate13",
    "plate16",
    "plate17",
  ]
  
  x = 0

  imageContainerModel = [
    this.plate1,
    this.plate2,
    this.plate3,
    this.plate4,
    this.plate5,
    this.plate6,
    this.plate7,
    this.plate8,
    this.plate9,
    this.plate10,
    this.plate11,
    this.plate12,
    this.plate13,
    this.plate16,
    this.plate17,
  ]

  constructor(
    public photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {}

  getScore() {
    if (this.imageContainerModel[0] === "12") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[1] === "8") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[2] === "29") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[3] === "5") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[4] === "3") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[5] === "15") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[6] === "74") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }
    if (this.imageContainerModel[7] === "6") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[8] === "45") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[9] === "5") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[10] === "7") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[11] === "16") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[12] === "73") {
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.imageContainerModel[13] === "26") {
      this.total = this.total + 1
    } else if (this.imageContainerModel[13] === "6") {
      this.protan = this.protan + 1
    } else if (this.imageContainerModel[13] === "2") {
      this.deuteran = this.deuteran + 1
    }

    if (this.imageContainerModel[14] === "42") {
      this.total = this.total + 1
    } else if (this.imageContainerModel[14] === "2") {
      this.protan = this.protan + 1
    } else if (this.imageContainerModel[14] === "4") {
      this.deuteran = this.deuteran + 1
    }

    if (this.redGreen == 13 && this.protan == 0 && this.deuteran == 0) {
      this.resultString = "You have a rare case of achromatopsia, you should see a doctor and get your eyes checked"
      this.condition = "imageNormal"
    } else if (this.protan > 0 && this.redGreen > 0) {
      this.resultString = "You are part of the 1% of males and 0.1% of females globally that has Protanopia"
      this.condition = "imageProtanopia"
    } else if (this.deuteran > 0 && this.redGreen > 0) {
      this.resultString = "You are part of the 1% of males and 0.35% of females globally that has Deuteranopia"
      this.condition = "imageDeuteranopia"
    } else if (this.redGreen > 0) {
      this.resultString = "You are part of the 5–8% of males and 0.5–1% of females globally that has red-green deficiency"
      this.condition = "imageRedGreen"
    } else {
      this.resultString = "You don't have any colorblind condition"
      this.condition = "imageNormal"
    }

  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.getScore()
    if (!isOpen) {
      this.total = 0
      this.deuteran = 0 
      this.protan = 0
      this.redGreen = 0
    }
  }

  openCam() {
    this.isModalOpen = false
    this.photoService.addNewToGallery(this.condition);
    this.router.navigate(['camera', this.condition]);
  }


  nextImage() {
    if (this.x < 14 ){
      this.x++
    }
  }

  prevImage(){
    if (this.x !== 0 ){
      this.x--
   }
  }
}
