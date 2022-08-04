import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { SubtasksModule } from './subtasks/subtasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://root:root@omnismart.kzq80tr.mongodb.net/?retryWrites=true&w=majority',
    ),
    TasksModule,
    SubtasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
