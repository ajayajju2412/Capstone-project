import { Directive,Attribute} from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';  
import { Subscription } from 'rxjs';  

@Directive({
  selector: '[appPasswordValidator]',
  providers: [  
    {  
      provide: NG_VALIDATORS,  
      useClass: PasswordValidatorDirective,  
      multi: true  
    }  
  ]  
})
export class PasswordValidatorDirective implements Validator  {

  constructor(@Attribute('appPasswordValidator') public PasswordControl: string) { }  
  
  validate(c: FormControl) {  
  
    const Password = c.root.get(this.PasswordControl);  
    const ConfirmPassword = c;  
  
    if (ConfirmPassword.value === null) {  
      return null;  
    }  
  
    if (Password) {  
      const subscription: Subscription = Password.valueChanges.subscribe(() => {  
        ConfirmPassword.updateValueAndValidity();  
        subscription.unsubscribe();  
      });  
    }  
    return Password && Password.value !== ConfirmPassword.value ? { passwordMatchError: true } : null;  
  }  

}
