import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[]=[
 
  new Goal(1,'I am going to study','I will go to the library and find a good book',new Date(2020,3,14)),
  new Goal(1,'Im going to play ps','I will go to the library and find a good book',new Date(2019,6,9)),
  new Goal(1,'Im going to cook lunch','I will go to the library and find a good book',new Date(2022,1,12)),
  new Goal(1,'Im going to clean the house','I will go to the library and find a good book',new Date(2019,0,18)),
  new Goal(1,'Im going to help in cleaning the dishes','I will go to the library and find a good book',new Date(2019,2,14)),
  new Goal(1,'Im going to finish with ip','I will go to the library and find a good book',new Date(2030,3,14)),
  ];


  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
