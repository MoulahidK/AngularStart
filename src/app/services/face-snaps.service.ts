import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap-model";

@Injectable({
    providedIn: 'root'
}
)
export class FaceSnapsService{

     faceSnaps: FaceSnap[] =[
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: 'https://m.media-amazon.com/images/I/713+sB6SJkL._AC_SY355_.jpg',
          createdDate: new Date(),
          snaps: 100,
          location: "paris"
        },
        {
          id: 2,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: 'https://m.media-amazon.com/images/I/713+sB6SJkL._AC_SY355_.jpg',
          createdDate: new Date(),
          snaps: 30,
          location: "casa"
        
        },
        {
          id: 3,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit',
          imageUrl: 'https://m.media-amazon.com/images/I/713+sB6SJkL._AC_SY355_.jpg',
          createdDate: new Date(),
          snaps: 0,
        
        }
      ];
          
      getAllFaceSnaps(): FaceSnap[]{
            return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId:number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnapId === faceSnap.id);
        if(!faceSnap){
            throw new Error('Id not found'); 
        }
        else{
            return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap' ): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      
      }

 
}