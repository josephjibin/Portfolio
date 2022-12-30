import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  educationList: Education[] = [
    {
      university: 'MacEwan University',
      course: 'Full-Stack Web Developer',
      duration: '2022-2023',
    
    },
    {
      university: 'MacEwan University',
      course: 'Project Management',
      duration: '2021-2022',
  
    },
   
    {
      university: "Bharithiar University",
      course: "Bachelor's of Computer Application",
      duration: '2009-2012'
    },
  
  ];
}
