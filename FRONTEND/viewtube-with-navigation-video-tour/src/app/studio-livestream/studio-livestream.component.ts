import { Component, OnInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractControl, FormGroup, FormControl } from '@angular/forms';
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from '@angular/material/chips';
import * as moment from 'moment';

export interface Guest {
  name: string;
}

@Component({
  selector: 'app-studio-livestream',
  templateUrl: './studio-livestream.component.html',
  styleUrls: ['./studio-livestream.component.css']
})

export class StudioLivestreamComponent implements OnInit{
  ngOnInit(): void {
   
  }
  visible:boolean=false;
  fun1()
  {
    this.visible=true;
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  guests: Guest[] = [{name: 'abhilashsaha1@gmail.com'}, 
                     {name: 'rohitdhar@gmail.com'}, 
                     {name: 'santanughosh@gmail.com'}
                    ];

    registerform=new FormGroup({
    Title:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]),
    email:new FormControl('',[Validators.required,customValid1]),
    startdate:new FormControl('',[Validators.required,customValid2]),
    enddate:new FormControl('',[Validators.required,customValid3]),
    starttime:new FormControl('',[Validators.required,customValid4]),
    endtime:new FormControl('',[Validators.required,customValid5],),
    details:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]),
  })

    // fun1()
    // {
    // console.log(this.registerform)
    // console.log(this.registerform.value.Title)
    // }

  // submitted=false;
  // fun1()
  // {
  //   this.submitted=true;
  //   console.log(this.registerform)
  //   //console.log(this.registerform.value.Title)
  //   alert("Your video has been uploaded successfully");
  // }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || "").trim()) {
      this.guests.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = "";
    }
  }
  remove(guests: Guest): void {
    const index = this.guests.indexOf(guests);
    if (index >= 0) {
      this.guests.splice(index, 1);
    }
  }
}

export function customValid1(control:AbstractControl)
{
  if(control.value&&control.value.match("^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$"))
  {
    return null;
  }
  else{
    return { myError1:false}
  }
}

export function customValid2(control:AbstractControl)
{
 let dateenter=moment(control.value)
 let todaydate=moment()//new Date()
  if(dateenter.isBefore(todaydate))
  {
    return  { myError2:false}
  }
  else{
    return null;
  }
}

export function customValid3(control:AbstractControl)
{
 let dateenter=moment(control.value)
 const todaydate=moment(control.get("startdate")?.value);
  if(dateenter.isBefore(todaydate))
  {
    return  { myError3:false}
  }
  else{
    return null;
  }
}

export function customValid4(control:AbstractControl)
{
 let timeenter=moment(control.value)
 let curtime=moment()//new Date()
  if(timeenter.isBefore(curtime))
  {
    return  { myError4:false}
  }
  else{
    return null;
  }
}
export function customValid5(control:AbstractControl)
{
 let timeenter=moment(control.value)
 let starttime//new Date()
  if(timeenter.isBefore(starttime))
  {
    return  { myError5:false}
  }
  else{
    return null;
  }
}


