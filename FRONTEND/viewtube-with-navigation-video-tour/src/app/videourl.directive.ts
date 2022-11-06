import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appVideourl]',
  providers: [{provide: NG_VALIDATORS, useExisting: VideourlDirective, multi: true}]
})
export class VideourlDirective implements Validator{
  validregex:any= "((http|https)://)(www.)?" + "[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]" + "{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)";
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null
  {
    if(control.value.match(this.validregex))
    {
      return null
    }
  else{
    return {appVideourlDirective:false}
  }

  }

}
