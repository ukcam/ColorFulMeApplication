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

  constructor(
    public photoService: PhotoService,
    private router: Router
    ) { }

  ngOnInit() { }

  getScore() {
    if (this.plate1 === "12"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate2 === "8"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate3 === "29"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate4 === "5"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate5 === "3"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate6 === "15"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate7 === "74"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }
    if (this.plate8 === "6"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate9 === "45"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate10 === "5"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate11 === "7"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate12 === "16"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate13 === "73"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate16 === "26"){
      this.total = this.total + 1
    } else if (this.plate16 === "6") {
      this.protan = this.protan + 1
    } else if (this.plate16 === "2") {
      this.deuteran = this.deuteran + 1
    }

    if (this.plate17 === "42"){
      this.total = this.total + 1
    } else if (this.plate17 === "2") {
      this.protan = this.protan + 1
    } else if (this.plate17 === "4") {
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
    if(!isOpen){
      this.total = 0
      this.deuteran = 0 
      this.protan = 0
      this.redGreen = 0
    }
  }

  openCam() {
    this.isModalOpen = false
    this.photoService.addNewToGallery();
    this.router.navigate(['camera', this.condition]);
  }
}
