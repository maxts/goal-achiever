import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
'@nestjs/common';
import { GoalService } from './goal.service';

@Controller('api/goal')
export class GoalController {
  constructor(private readonly goalService: GoalService) {}
  @Get()
  public async getAll() {
    return this.goalService.getAllGoals();
  }
  @Get(':name')
  public async getOne(@Param('name') name: string) {
    const recipe = this.goalService.getGoalByName(name);
    if (!recipe) {
      throw new NotFoundException();
    }
    return recipe;
  }
}
