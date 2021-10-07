import { Injectable } from '@nestjs/common';
import data from './recipe.json';

@Injectable()
export class GoalService {
  public getAllGoals() {
    return data;
  }

  public getGoalByName(name: string) {
    return data.find(goal => goal.name === name);
  }
}
