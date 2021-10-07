import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { GoalModule } from './goal/goal.module';
import { StepModule } from './step/step.module';
import { ClientModule } from './client/client.module';

import { ClientController } from './client/client.controller';

@Module({
  imports: [GoalModule, StepModule, ClientModule],
  controllers: [], //AppController
  providers: [], //AppService
})
export class AppModule {}
