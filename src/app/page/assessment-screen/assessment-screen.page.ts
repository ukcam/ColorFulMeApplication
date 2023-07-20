import { Component, ContentChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


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
  plate7!: string;
  plate8!: string;
  plate10!: string;
  plate11!: string;
  plate16!: string;
  plate17!: string;
  plate22!: string;
  plate23!: string;
  plate24!: string;
  plate25!: string;

  deuteran = 0
  protan = 0
  redGreen = 0
  total = 0
  isModalOpen = false;

  resultString = ""

  constructor(private router: Router) { }

  ngOnInit() { }

  getScore() {
    if (this.plate1 === "12"){
      this.total = this.total + 1
    }

    if (this.plate2 === "8"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate3 === "6"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate7 === "3"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate8 === "15"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate10 === "2"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate11 === "6"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate16 === "16"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate17 === "73"){
      this.total = this.total + 1
    } else {
      this.redGreen = this.redGreen + 1
    }

    if (this.plate22 === "26"){
      this.total = this.total + 1
    } else if (this.plate22 === "6") {
      this.protan = this.protan + 1
    } else if (this.plate22 === "2") {
      this.deuteran = this.deuteran + 1
    }

    if (this.plate23 === "42"){
      this.total = this.total + 1
    } else if (this.plate22 === "2") {
      this.protan = this.protan + 1
    } else if (this.plate22 === "4") {
      this.deuteran = this.deuteran + 1
    }

    if (this.plate24 === "35"){
      this.total = this.total + 1
    } else if (this.plate22 === "5") {
      this.protan = this.protan + 1
    } else if (this.plate22 === "3") {
      this.deuteran = this.deuteran + 1
    }

    if (this.plate25 === "96"){
      this.total = this.total + 1
    } else if (this.plate22 === "6") {
      this.protan = this.protan + 1
    } else if (this.plate22 === "9") {
      this.deuteran = this.deuteran + 1
    }

  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.getScore()
    if(!isOpen){
      this.total = 0
    }
  }
}
