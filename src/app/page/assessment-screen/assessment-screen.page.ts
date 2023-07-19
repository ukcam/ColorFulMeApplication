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
  test1!: string;
  test2!: string;
  test3!: string;
  test4!: string;
  test5!: string;
  test6!: string;
  total = 0
  isModalOpen = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  getScore() {
    if (this.test1 === "1"){
      this.total = this.total + 1
    }
    if (this.test2 === "2"){
      this.total = this.total + 1
    }
    if (this.test3 === "3"){
      this.total = this.total + 1
    }
    if (this.test4 === "4"){
      this.total = this.total + 1
    }
    if (this.test5 === "5"){
      this.total = this.total + 1
    }
    if (this.test6 === "6"){
      this.total = this.total + 1
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
