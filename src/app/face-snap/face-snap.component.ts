import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  constructor( private faceSnapsService: FaceSnapsService,  private router: Router){}

  ngOnInit(){
 
    this.buttonText = 'Oh snap !';
    

  }

  onSnap(){
    if(this.buttonText === 'Oh snap !'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap !';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh snap !';
    }
  }

  onView(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
