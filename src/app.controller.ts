import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async homePage(@Req() req: Request, @Res() res: Response) {
    res.sendFile(join(process.cwd() + '/views/bicycles.html'));
  }
}
