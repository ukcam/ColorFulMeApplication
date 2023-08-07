import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraScreenPage } from './camera-screen.page';

describe('CameraScreenPage', () => {
  let component: CameraScreenPage;
  let fixture: ComponentFixture<CameraScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CameraScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
