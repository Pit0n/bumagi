import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private durationInSeconds = 3;

  constructor(private _snackBar: MatSnackBar) {}

  public openAlert = (message) => {
    this._snackBar.open(message, '',{
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'custom-error'
    })
  };
}
