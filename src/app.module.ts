import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fieldtest } from './entities/fieldtest.entity';
import { Form } from './entities/form.entity';
import { Gauge } from './entities/gauge.entity';
import { Project } from './entities/project.entities';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Form, User, Gauge, Project, Fieldtest, Event]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
