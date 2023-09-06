import { Controller, Get, Req, Res, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { join } from 'path';
const bicycles = require('../data/data.json');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('bicycles')
  async homePage(@Req() req: Request, @Res() res: Response) {
    return { message: 'Hello world!' };
  }

  @Get('bicycle')
  @Render('overview')
  async bicycle(@Query() input: { id: number }, @Res() res: Response) {
    return { message: 'Hello world!' };
  }
}
