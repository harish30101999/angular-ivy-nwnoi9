import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from './register';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
 
  register = [];
  model = new Register();
  form: FormGroup;
  submitted = false;

  constructor(private registerService: RegisterService) {}

  ngOnInit() 
  
  {
    this.getAllRegister();
  }
  
  public getAllRegister() {
    this.registerService
      .getAllRegisterService()
      .subscribe((x: any[]) => {
        this.register = x;
      });
  }
  editRegister(id: string) {
    alert(id);
    this.registerService
    .getRegisterService(id)
    .subscribe((data: any) => (this.model = data));

  }
 
 
  deleteRegister(id) {
    alert(id);
    this.registerService
      .deleteRegisterService(id)
      .subscribe((data) => {
        this.getAllRegister();
      });
  }

  addRegister() {
     alert(JSON.stringify(this.model));
    if (!this.model.id) {
      // alert(JSON.stringify(this.model));
      this.registerService
        .createRegisterService(this.model)
        .subscribe((data) => {
          this.getAllRegister();
          this.model = new Register();
        });
    } else {
      // alert(JSON.stringify(this.model));
      this.registerService
        .updateRegisterService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllRegister();
          this.model = new Register();
        });
    }
    
  }
 
}
