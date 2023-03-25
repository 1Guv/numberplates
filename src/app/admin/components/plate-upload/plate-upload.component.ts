import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { PlateListingsService } from 'src/app/_services/aws/plate-listings.service';

@Component({
  selector: 'app-plate-upload',
  templateUrl: './plate-upload.component.html',
  styleUrls: ['./plate-upload.component.scss']
})
export class PlateUploadComponent implements OnInit {

  newPlates$: Observable<any>;
  subscriptions: Subscription[] = [];
  form: FormGroup;
  deleteForm: FormGroup;

  constructor(
    private http: HttpClient,
    private plateListingsService: PlateListingsService,
    private formBuilder: FormBuilder
  ) {
    this.newPlates$ = this.http.get<any>('./assets/data/old_plates_to_new_object.json').pipe(shareReplay(1));
  }

  ngOnInit(): void {
    this.buildForm();
    this.buildDeleteForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      start: [],
      end: []
    });
  }

  buildDeleteForm() {
    this.deleteForm = this.formBuilder.group({
      id:[]
    });
  }

  uploadPlates(start: number, end: number) {
    const obs: Observable<any>[] = [];

    this.subscriptions.push(
      this.newPlates$
        .pipe(
          map((plates: any) => {
            console.log('plates', plates);
            const platesToUpload = plates?.newPlateObjects.slice(start, end);
            console.log('platesToUpload', platesToUpload);

            platesToUpload.map((plate: any) => {
              console.log('plate', plate);
              obs.push(
                this.plateListingsService.createPlate(plate)
              );
            });

            forkJoin(obs)
              .pipe()
              .subscribe(() => console.log('done'));

          })
        )
        .subscribe()
    );
  }

  deletePlate() {
    this.subscriptions.push(
      this.plateListingsService
        .deletePlate(this.deleteForm.get('id').value)
        .pipe(
          map((res: any) => {
            console.log('res', res);
            console.log('plate deleted');
          })
        )
        .subscribe()
    );
  }

}
