import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLS } from '../mock-skills'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skill: Skill = {
    id: 1,
    name: 'JavaScript'
  };

  skills = SKILLS;

  constructor() { }


  ngOnInit(): void {
  }

}
