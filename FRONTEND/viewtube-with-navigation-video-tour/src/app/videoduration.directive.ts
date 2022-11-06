import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appVideoduration]',
  providers: [{provide: NG_VALIDATORS, useExisting: VideodurationDirective, multi: true}]
})
export class VideodurationDirective implements Validator {
  videoregex:any= "([\\d]{1,2}\:)?([\\d]{1,2})?\:([\\d]{1,2})"
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null
  {
    if(control.value.match(this.videoregex))
    {
      return null
    }
  else{
    return {appVideodurationDirective:false}
  }

  }

}
