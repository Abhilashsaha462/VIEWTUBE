import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  submitted=false;
  fun1()
  {
    this.submitted=true;
    alert("Your video has been uploaded successfully");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
