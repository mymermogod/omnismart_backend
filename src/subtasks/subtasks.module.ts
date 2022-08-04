import { Module } from '@nestjs/common';
import { SubtasksService } from './subtasks.service';
import { SubtasksController } from './subtasks.controller';

@Module({
  controllers: [SubtasksController],
  providers: [SubtasksService]
})
export class SubtasksModule {}
