import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'angularforms';

  // first : any;
  // last : any
  // email : any
  // city : any
  // mobile : any;

  info: any = { first: " ", last: " ", email: " ", city: " ", mobile: " " };

  formdata: any;

  allinfo: any = { one: "", two: "", three: "", four: "", five: "" };

  submit(data: any) {

    // this.first = data.firstname;
    // this.last = data.lastname;
    // this.email  = data.email;
    // this.city = data.city;
    // this.mobile = data.mobno;

    this.info = { first: data.firstname, last: data.lastname, email: data.email, city: data.city, mobile: data.mobno };

  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      firstname: new FormControl("", Validators.compose([Validators.required])),
      lastname: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      city: new FormControl("", Validators.compose([Validators.required])),
      mobilenumber: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10)]))

    });

  }
  submitted(information: any) {

    this.allinfo = { one: information.firstname, two: information.lastname, three: information.email, four: information.city, five: information.mobilenumber }

  }


}
