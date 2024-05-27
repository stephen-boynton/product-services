import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TestModule } from './test/test.module'

@Module({
  imports: [
    ConfigModule.forRoot(), // so that we can pull in config
    AuthModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
