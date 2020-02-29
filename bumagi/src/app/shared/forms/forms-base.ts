import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


export class FormsBase implements OnDestroy {
  @Output() nextStep = new EventEmitter<boolean>();
  @Output() sendForm = new EventEmitter<boolean>();

  public form: FormGroup = new FormGroup({});

  public unsubscribe$ = new Subject();

  constructor(protected formBuilder: FormBuilder) {
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public submitForm(): void {

  }

  public goBack(): void {

  }

  /** событие валидных изменений контрола */
  public validChangeControl$(controlName: string) {
    return this.control(controlName).valueChanges
      .pipe(
        filter(() => this.isControlValid(controlName)),
        takeUntil(this.unsubscribe$)
      );
  }

  /** событие изменения контрола */
  public changeControl$(controlName: string): Observable<string> {
    return this.control(controlName).valueChanges
      .pipe(
        takeUntil(this.unsubscribe$)
      );
  }

  /** контрол валидный ? */
  public isControlValid(controlName: string): boolean {
    const control = this.control(controlName);

    return control.valid && control.dirty;
  }

  /** сделать контрол инвалидным */
  public setControlInvalid(controlName: string) {
    const control = this.control(controlName);
    control.setErrors({'incorrect': true});
  }

  /** обнулить контрол */
  public clearControl(controlName: string): void {
    this.control(controlName).setValue('');
  }

  /** заблокировать контролы */
  public disableControls(controlNames: string[]): void {
    const disableControls = (control: string) => this.control(control).disable();
    controlNames.map(disableControls);
  }

  /** Убрать валидаторы для контрола */
  protected clearValidators(controlName: string): void {
    this.control(controlName).clearValidators();
    this.control(controlName).updateValueAndValidity();
  }

  /** Установить для контрола Validators.required */
  protected requiredControl(controlName: string): void {
    this.control(controlName).setValidators(Validators.required);
    this.control(controlName).updateValueAndValidity();
  }

  /** Сделать все поля формы активными */
  protected enableForm = (): void => {
    this.form.enable({ onlySelf: true, emitEvent: false });
  }

  /** получить контрол по его имени для this.form */
  protected control(controlName: string): AbstractControl {
    return this.getControlForm(this.form, controlName);
  }

  /** получить контрол */
  private getControlForm(form: FormGroup, controlName: string): AbstractControl {
    return form.controls[controlName];
  }
}
