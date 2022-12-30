import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  skills: Skill[] = [
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },

    {
      name: 'Angular & Typescript, Angular Material, Bootstrap',
      level: 'Expert',
      rating: 80,
    },
   
    {
      name: 'C#',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Git, Azure DevOps',
      level: 'Intermidiate',
      rating: 70,
    },
   
    {
      name: 'ASP.NET Core, Entity Framework',
      level: 'Basic Knowledge',
      rating: 50,
    },
  
  ];
}
