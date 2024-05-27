import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { AuthenticatedGuard } from '../common/guards/authenticated.guard'

@Controller('test')
export class TestController {
  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  async get(@Param() params) {
    return params.id
  }

  @Get('hello')
  async hello() {
    return 'Hello World!'
  }
}
