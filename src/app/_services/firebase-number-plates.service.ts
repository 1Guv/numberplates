import { CustomerPlate } from './../search/number-plate-search/number-plate-search.component';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseNumberPlatesService {

  private dbPath = '/numberplates';
  numberplatesRef: AngularFirestoreCollection<CustomerPlate>;

  constructor(private db: AngularFirestore) {
    this.numberplatesRef = this.db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<CustomerPlate> {
    return this.numberplatesRef;
  }

  create(plate: CustomerPlate): any {
    return this.numberplatesRef.add({ ...plate });
  }

  update(id: string, data: any): Promise<void> {
    return this.numberplatesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.numberplatesRef.doc(id).delete();
  }

}
