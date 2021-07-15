import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public personalForm:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personalForm = this.formBuilder.group({
      'salutation': [''],
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'gender': [''],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'phone': ['', Validators.required],
      'zipcode': ['', Validators.required],
      'country': ['', Validators.required],
      'state' : [''],
      'address' : ['']
    });
  }

  public onSubmit(values:Object):void {
      if (this.personalForm.valid) {
          // this.router.navigate(['pages/dashboard']);
      }
  }
  

}

export function emailValidator(control: FormControl): {[key: string]: any} {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
  if (control.value && !emailRegexp.test(control.value)) {
      return {invalidEmail: true};
  }
}
