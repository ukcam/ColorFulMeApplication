import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CameraPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  //   // Red-Blind
  // 'Protanopia':   [0.567,0.433,0.000,
  //                  0.558,0.442,0.000,
  //                  0.000,0.242,0.758],
  // // Red-Weak
  // 'Protanomaly':  [0.817,0.183,0.000,
  //                  0.333,0.667,0.000,
  //                  0.000,0.125,0.875],
  // // Green-Blind
  // 'Deuteranopia': [0.625,0.375,0.000,
  //                  0.700,0.300,0.000,
  //                  0.000,0.300,0.700],
  // // Green-Weak
  // 'Deuteranomaly':[0.800,0.200,0.000,
  //                  0.258,0.742,0.000,
  //                  0.000,0.142,0.858],
  // // Blue-Blind
  // 'Tritanopia':   [0.950,0.050,0.000,
  //                  0.000,0.433,0.567,
  //                  0.000,0.475,0.525],
  // // Blue-Weak
  // 'Tritanomaly':  [0.967,0.033,0.00,
  //                  0.00,0.733,0.267,
  //                  0.00,0.183,0.817],
  // // Monochromacy
  // 'Achromatopsia':[0.299,0.587,0.114,
  //                  0.299,0.587,0.114,
  //                  0.299,0.587,0.114],
  // // Blue Cone Monochromacy
  // 'Achromatomaly':[0.618,0.320,0.062,
  //                  0.163,0.775,0.062,
  //                  0.163,0.320,0.516];
}
