import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { UserLifecycle } from './user.lifecycle'
import { Logger } from './logger.provider'

@Module({
  providers: [UserService, Logger, UserLifecycle],
  controllers: [UserController]
})
export class UserModule {}
