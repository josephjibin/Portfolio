import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aboutMe: 
  string []=
  [
    'Hii, I am Jibin Joseph, apsiring front-end developer recently finished Full-stack Wed Developer certification from MacEwan University.',
    'I have experince in working various fields like Avaition, Curise and Construction. However I was always been passionate about coding and learning new things.',
    'Coming to Canada has given me the opportunity to follow my passion.'  

  ]
  
}
