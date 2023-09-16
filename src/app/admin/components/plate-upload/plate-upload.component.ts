import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { PlateListingsService } from 'src/app/_services/aws/plate-listings.service';

@Component({
  selector: 'app-plate-upload',
  templateUrl: './plate-upload.component.html',
  styleUrls: ['./plate-upload.component.scss']
})
export class PlateUploadComponent implements OnInit, OnDestroy {

  newPlates$: Observable<any>;
  subscriptions: Subscription[] = [];
  form: FormGroup;
  deleteForm: FormGroup;
  getPlateForm: FormGroup;
  updatePlateForm: FormGroup;

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
    this.buildGetPlateForm();
    this.buildUpdatePlateForm();
  }

  buildUpdatePlateForm() {
    this.updatePlateForm = this.formBuilder.group({
      id: [],
      fieldToUpdate: [],
      newField: []
    });
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

  buildGetPlateForm() {
    this.getPlateForm = this.formBuilder.group({
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

  getPlate() {
    this.subscriptions.push(
      this.plateListingsService
        .getPlateById(this.getPlateForm.get('id').value)
        .pipe(
          map((res: any) => {
            console.log('res', res);
            console.log('get plate by id');
          })
        )
        .subscribe()
    );
  }

  updatePlate() {
    this.subscriptions.push(
      this.plateListingsService
        .updatePlate(
          this.updatePlateForm.get('id').value,
          this.updatePlateForm.get('fieldToUpdate').value,
          this.updatePlateForm.get('newField').value,
        )
        .pipe(
          map((res: any) => {
            console.log('res', res);
            console.log('update plate by id');
          })
        )
        .subscribe()
    );
  }

  getAllUsers() {
    this.subscriptions.push(
      this.plateListingsService
        .getUsers()
        .pipe(
          map((res: any) => {
            console.log('users', res);
          })
        )
        .subscribe()
    );
  }

  getHealth() {
    this.subscriptions.push(
      this.plateListingsService
        .getHealth()
        .pipe(
          map((res: any) => {
            console.log('health', res);
          })
        )
        .subscribe()
    );
  }

  getUserById() {
    this.subscriptions.push(
      this.plateListingsService
        .getUserById(3)
        .pipe(
          map((res: any) => {
            console.log('user', res);
          })
        )
        .subscribe()
    );
  }

  createUser() {
    this.subscriptions.push(
      this.plateListingsService
        .createUser()
        .pipe(
          map((res: any) => {
            console.log('user', res);
          })
        )
        .subscribe()
    );
  }

  updateUser() {
    this.subscriptions.push(
      this.plateListingsService
        .updateUser('23', 'nickname', 'testing')
        .pipe(
          map((res: any) => {
            console.log('user', res);
          })
        )
        .subscribe()
    );
  }

  getAllValuations() {
    this.subscriptions.push(
      this.plateListingsService
      .getValuations()
      .pipe(
        map((res: any) => {
          console.log('valuations', res);
        })
      )
      .subscribe()
    );
  }

  getValuationById() {
    this.subscriptions.push(
      this.plateListingsService
        .getValuationById(1)
        .pipe(
          map((res: any) => {
            console.log('user', res);
          })
        )
        .subscribe()
    );
  }

  createValuation() {
    this.subscriptions.push(
      this.plateListingsService
        .createValuation()
        .pipe(
          map((res: any) => {
            console.log('user', res);
          })
        )
        .subscribe()
    );
  }

  getMessages() {
    this.subscriptions.push(
      this.plateListingsService
        .getMessages()
        .pipe(
          map((res: any) => {
            console.log('messages', res);
          })
        )
        .subscribe()
    );
  }

  getMessageById() {
    this.subscriptions.push(
      this.plateListingsService
        .getMessageById(2)
        .pipe(
          map((res: any) => {
            console.log('message', res);
          })
        )
        .subscribe()
    );
  }

  createMessage() {
    this.subscriptions.push(
      this.plateListingsService
        .createMessage()
        .pipe(
          map((res: any) => {
            console.log('user', res);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.map((sub: Subscription) => sub.unsubscribe());
  }

}
