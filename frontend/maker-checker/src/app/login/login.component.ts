import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private router : Router,private homecomp : HomeComponent) { }


  ngOnInit() {
    this.prepareForm();
  }

  prepareForm(): any {
    this.logForm = this.formBuilder.group({
      IUser: new FormGroup({
        username: new FormControl,
        role: new FormControl
        
      })
    });
  }


  onSubmit() {
    this.router.navigate(['app-customerlist']);
    this.homecomp.setOpened();
   }

  
   

}
