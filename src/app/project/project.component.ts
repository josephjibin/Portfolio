import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects: Project[] = [
    {
      title: 'Capstone Project ',
      technologies: ' Angular, Typescript, HTML & CSS, Bootstrap, C#, Entity Framework and Azure DevOps',
      description: [
        'Create a ToDo Dashboard Website .',
        'Developed front-end page, added user administration, created backend services and launched CI/CD pipelines ',
        '',
      ],
    },
    {
      title: 'ChromeOS',
      technologies: 'C, C++',
      description: [
        'Worked as a team lead to build ChromeOS',
        'Got to learn about linux kernel',
        'Learned C, C++ to build an O.S.',
      ],
    },
    {
      title: 'Google Toolbar',
      technologies: 'HTML, CSS, JS, C#',
      description: [
        'Worked on Google Toolbar, to include the google search engine in Internet Explorer',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
}
