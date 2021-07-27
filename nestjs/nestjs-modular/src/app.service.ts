import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    // private configService: ConfigService,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    console.log('tasks', this.tasks);
    return `Hello World! ${this.configService.aipKey} - ${this.configService.database.name}`;
  }
}
